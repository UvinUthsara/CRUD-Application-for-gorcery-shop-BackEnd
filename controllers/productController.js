const Product = require('../models/productModel')
const asyncHandler = require('express-async-handler')

//get product 
const getProducts = asyncHandler(async(req, res) => {
    try {
        const products = await Product.find({});
        res.status(200).json(products);
    } catch (error) {
        res.status(500);
        throw new Error(error.message);
        res.status(500).json({message: error.message})
    }
})

//get product by Id
const getProductsById = asyncHandler(async(req, res) =>{
    try {
        const {id} = req.params;
        const product = await Product.findById(id);
        res.status(200).json(product);
    } catch (error) {
        res.status(500); //this doesnt work inside async  to solve this we need express async hanlder to remove this problem
        throw new Error(error.message);  //this doesnt work inside async    
        //res.status(500).json({message: error.message})
    }
})

//create product
const createProducts = asyncHandler(async(req, res) => {
    try {
        const product = await Product.create(req.body)
        res.status(200).json(product);
        
    } catch (error) {
        res.status(500);
        throw new Error(error.message);
        //console.log(error.message);
        //res.status(500).json({message: error.message})
    }
})


//update product
const updateProducts = asyncHandler(async(req, res) => {
    try {
        const {id} = req.params;
        const product = await Product.findByIdAndUpdate(id, req.body);
        // we cannot find any product in database
        if(!product){
            return res.status(404).json({message: `cannot find any product with ID ${id}`})
        }
        const updatedProduct = await Product.findById(id);
        res.status(200).json(updatedProduct);
        
    } catch (error) {
        res.status(500);
        throw new Error(error.message);
        //res.status(500).json({message: error.message})
    }
})


//delete product
const deleteProducts = asyncHandler(async(req, res) =>{
    try {
        const {id} = req.params;
        const product = await Product.findByIdAndDelete(id);
        if(!product){
            return res.status(404).json({message: `cannot find any product with ID ${id}`})
        }
        res.status(200).json(product);
        
    } catch (error) {
        res.status(500);
        throw new Error(error.message);
        //res.status(500).json({message: error.message})
    }
})


module.exports = {
    
    getProducts,
    getProductsById,
    createProducts,
    updateProducts,
    deleteProducts
}