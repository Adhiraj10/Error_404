import express  from "express";
import Product from '../models/products.js'
import Shop from "../models/shops.js";
import mongoose from "mongoose";
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

export const deleteProduct = async (req,res,next) => {
    const { visitor} = req.body;
    const id =   req.params.productId

    try{
        console.log(id + "Product ID")
        const product = await Product.findOne({_id: id})
        if(product){
            const productCount = parseInt(product.shopifyCount) + parseInt(product.wordPressCount) + parseInt(product.magentoCount) ;
            const shopId = product.shop
            await Product.deleteOne({_id : id});
            console.log(parseInt(visitor) - parseInt(productCount));
            const newShop = await Shop.findOneAndUpdate({_id : shopId} , {visitorCount : parseInt(visitor) - parseInt(productCount)} , {new:true});
            console.log(newShop)
            return res.status(200).json({message:"Product Deleted"});
        }
        else return res.status(404).json({message:"Something Went Wrong Please Try Again"})
        
    }catch(err){
        console.log(err);
        return res.status(404).json({message:"Something Went Wrong Please Try Again"})
    }
}