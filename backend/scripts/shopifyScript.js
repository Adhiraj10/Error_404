//The shop owner only needs to include the following code in his website
//<script src="http://localhost:4000/api/sendScript"></script>

function obj(unique, product, count) {
    this.unique = unique;
    this.product = product;
    this.count = count;
}

const retrieveImg = (count, product) => {
    fetch(`http://localhost:4000/api/thresholdimg?product=${product}&count=${count}`)
        .then((response) => response.blob())
        .then((imageBlob) => {
            const reader = new FileReader();
            reader.readAsDataURL(imageBlob);
            reader.onloadend = function () {
                const base64data = reader.result;
                if (window.location.href === `https://${domainParts[0]}.myshopify.com/products/${product}`) {
                    const imgElement = document.createElement("img");
                    const parentEle = document.getElementById("ProductInfo-template--18356368474421__main");
                    imgElement.src = base64data;
                    parentEle.appendChild(imgElement);
                }
            }
        })
        .catch(err => console.log(err))
}

let URL = window.location.href;
const domain = window.location.hostname;
const domainParts = domain.split('.');
if (URL.startsWith(`https://${domainParts[0]}.myshopify.com/products/`)) {
    let product = URL.substring(URL.lastIndexOf('/') + 1);
    let LSdata = localStorage.getItem(product);
    if (!LSdata) {
        let myObj = new obj(true, product, 0);
        localStorage.setItem(product, JSON.stringify(myObj));
        fetch(`http://localhost:4000/api/shopifyCount?unique=true&product=${product}`).then((response) => response.json())
            .then((serverData) => {
                if (serverData.threshold) {
                    let { count, product } = serverData;
                    let temp = JSON.parse(localStorage.getItem(product));
                    temp['threshold'] = true;
                    temp['count'] = count;
                    localStorage.setItem(product, JSON.stringify(temp));
                    retrieveImg(count, product);
                }
            })
            .catch(err => console.log(err))
    }
    else {
        let temp = JSON.parse(localStorage.getItem(product));
        let { threshold } = temp;
        count = temp.count;
        product = temp.product;
        if (threshold) {
            retrieveImg(count, product);
        }
    }
}