const express = require('express');
const Product = require('../models/productModel')
const {getProducts,getProductsById,createProducts,updateProducts,deleteProducts} = require ('../controllers/productController')


const router = express.Router();


//get product 
router.get('/',getProducts );

//get product by Id
router.get('/:id',getProductsById )

//create product
router.post('/',createProducts)

// update a product
router.put('/:id',updateProducts )

// delete a product
router.delete('/:id',deleteProducts)


module.exports = router;