import asyncHandle from 'express-async-handler';
import Product from "../models/productModule.js"

 export const createProduct=asyncHandle(async(req,res)=>{
    console.log("The request body is:",req.body)
    const{id,name,description,price}=req.body;
    if(!id || !name || !description|| !price){
        res.status(400);
        throw new Error("All fields are mandatory");
    }
    const product = await Product.create({
        id,
        name,
        description,
        price
    });
    res.status(200).json(product);
});

export const readAllProducts=asyncHandle(async(req,res)=>{
   res.status(200).json({"message": "GET all products endpoint hit"})
});

export const readProductById=asyncHandle(async(req,res)=>{
   res.status(200).json({"message": "Return products with ID endpoint hit"})
});

export const updateProduct=asyncHandle(async(req,res)=>{
   res.status(200).json({"message": "PUT product endpoint hit"})
});

export const deleteProduct=asyncHandle(async(req,res)=>{
   res.status(200).json({"message": "DELETE product endpoint hit"})
});

export const insertProduct=asyncHandle(async(req,res)=>{
   res.status(200).json({"message": "insert new product endpoint hit"})
});