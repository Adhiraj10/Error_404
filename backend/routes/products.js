import express  from "express";
import { addProduct } from "../controller/products.js";
import { getProducts } from "../controller/products.js";
const productRouter = express.Router();
productRouter.get("/user/product/:shopId" ,getProducts);
productRouter.post("/user/product/:shopId/add" ,addProduct);
export default productRouter;