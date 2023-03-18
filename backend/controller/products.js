import express  from "express";
import Product from '../models/products.js'

export const getProducts = async (req,res,next) => {
    const shopId = req.params.shopId;
    try{
        const allProducts = await Product.find({shop : shopId})
        return res.status(200).json(allProducts);
    }catch(err){
        return res.status(404).json({message:"Something Went Wrong Please Try Again"})
    }
    
}

export const addProduct = async(req,res,next) => {
    const {name} = req.body;
    const shop = req.params.shopId

    try{
        let productExist = await Product.find({productName : name})
        if(productExist.length) return res.status(404).json({message:"Product Already exists"});
        else{
            const newProduct = new Product({productName : name , shop})
            await newProduct.save();
            return res.status(200).json(newProduct);
        }    
    }catch(err){
        return res.status(404).json({message:"Something Went Wrong Please Try Again"})
    }

}