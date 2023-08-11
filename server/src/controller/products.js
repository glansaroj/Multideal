
// Importing
const fs = require('fs');
const path = require('path');
const Products=require('../models/products')


const addNewProducts = async(req,res)=>{
    req.body.productImage = req.file.filename
    await Products.create(req.body)
      res.json({
        msg: 'successfully add new product'
      })
  }


const getAllProducts = async(req,res)=>{
    const data =  await Products.find()
    if(data){
     res.json({
       data,
       msg: 'success'
     })
    }  
 
   }


module.exports = {addNewProducts, getAllProducts};



//   const getProductImageById = async(req,res)=> {
//     const data =  await Products.findById(req.params.id)
//     const imageDir = path.join(__dirname,'../../','uploads/'+data.productImage) 
//     const defaultDir = path.join(__dirname,'../../','uploads/userAvatar/nobike.jpeg') 

//     if(fs.existsSync( imageDir )){
//         res.sendFile(imageDir)
//     }else{
//         res.sendFile(defaultDir)
//     }
   
//   }
