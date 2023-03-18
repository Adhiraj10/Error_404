let products = [["hp-laptop", parseInt(0)], ["hp-laptop-1", parseInt(0)]];
const threshold = 2;

export const shopifyCount = (req, res, next) => {
    let { unique, product } = req.query;
    unique = JSON.parse(unique);
    if (unique) {
        for (let i = 0; i < products.length; i++) {
            if (products[i][0] == product) {
                products[i][1]++;
                // console.log(products);
                res.status(200).json({
                    "product": product,
                    "count": products[i][1],
                    "threshold": threshold
                })
            }
        }
    }
    next();
}
