let products = [["hp-laptop", parseInt(0)], ["hp-laptop-1", parseInt(0)]];
const thresholdVal = 1;

export const shopifyCount = (req, res, next) => {
    let { unique, product } = req.query;
    unique = JSON.parse(unique);
    // console.log(unique, product)
    if (unique) {
        for (let i = 0; i < products.length; i++) {
            if (products[i][0] == product) {
                products[i][1]++;
                if (products[i][1] >= thresholdVal) {
                    res.status(200).json({
                        count: products[i][1],
                        threshold: true,
                        product: products[i][0]
                    })
                }
                console.log(products);
                res.status(200).json({
                    "message": "Unique Visitor"
                });
                return;
            }
        }
    }
}
