
// Importing
const fs = require('fs');
const path = require('path');
const Products=require('../models/products')




// Add a new product ---> 
const addNewProducts = async(req,res)=>{
    req.body.productImage = req.file.filename
    await Products.create(req.body)
      res.json({
        msg: 'successfully add new product'
      })
  }



// Get all product --->
const getAllProducts = async(req,res)=>{
    const data =  await Products.find()
    if(data){
     res.json({
       data,
       msg: 'success'
     })
    }  
 
   }



// Get single product image 
const getProductImageById = async(req,res)=> {
const data =  await Products.findById(req.params.id)
const imageDir = path.join(__dirname,'../../','uploads/'+ data.productImage) 
// const defaultDir = path.join(__dirname,'../../','uploads//nobike.jpeg') 

    if(fs.existsSync( imageDir )){
        res.sendFile(imageDir)
    }else{
        // res.sendFile('Oops, Filed to load!!')
        console.log('Oops, Filed to load');
    }
   
  }


  
// Get product details
const getProductsDetails = async (req, res) => {
  const product = await Products.findById(req.params.id)
  if(!product) {
    return res.status(500).json({
      success: false,
      message: 'Product not found'
    })
  }
  
  res.status(200).json({
    success: true,
    product,
  })

}


module.exports = {addNewProducts, getAllProducts, getProductImageById, getProductsDetails};



