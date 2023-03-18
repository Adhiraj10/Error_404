import React from 'react';
import { CodeFrame } from './CodeFrame.jsx';

const Code = () => {
    const script = `function obj(unique, product) {
      this.unique = unique;
      this.product = product;
    }

    let URL = window.location.href;
    if (URL.startsWith(\`https://adhirajkart.myshopify.com/products/\`)) {
      let product = URL.substring(URL.lastIndexOf('/') + 1);
      let LSdata = localStorage.getItem(product);
      if (!LSdata) {
        let myObj = new obj(true, product);
        localStorage.setItem(product, JSON.stringify(myObj));
        fetch(\`http://localhost:5000/api/shopifyCount?unique=true&product=\${product}\`).then((response) => response.json())
          .then((serverData) => {
            console.log(serverData.threshold)
            if (serverData.threshold) {
              let { count, product } = serverData;
              console.log(count, product);
              fetch(\`http://localhost:5000/api/thresholdimg?product=\${product}&count=\${count}\`)
                .then((response) => response.blob())
                .then((imageBlob) => {
                  const reader = new FileReader();
                  reader.readAsDataURL(imageBlob);
                  reader.onloadend = function () {
                    const base64data = reader.result;
                    if (window.location.href === \`https://adhirajkart.myshopify.com/products/\${product}\`) {
                      const imgElement = document.createElement("img");
                      const parentEle = document.getElementById("ProductInfo-template--18356368474421__main");
                      imgElement.src = base64data;
                      parentEle.appendChild(imgElement);
                    }
                  }
                })
                .catch(err => console.log(err))
            }
          })
          .catch(err => console.log(err))
      }
      else {
        fetch(\`http://localhost:5000/api/shopifyCount?unique=false\`).catch(err => console.log(err));
      }
    }`;

    return (
        <CodeFrame codeString={script} />
    );
};

export default Code;