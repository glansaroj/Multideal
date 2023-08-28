
// Importing
const fs = require('fs');
const path = require('path');
const Products = require('../models/products')




// Add a new product ---> 
const addNewProducts = async (req, res) => {
  req.body.productImage = req.file.filename
  await Products.create(req.body)
  res.json({
    msg: 'successfully add new product'
  })
}



// Get all products --->
const getAllProducts = async (req, res) => {
  try {
    const data = await Products.find();
    const count = await Products.countDocuments();
    if(data)  {
      res.json({
      data,
      msg: 'success',
      productsList: data,
      count: count
    })}
    
   
  } catch (error) {
    res.status(500).json({ error: 'Opps!, error occurred while fetching products.' });
  }
};



// Get Searched products --->
const getSearchProduct = async (req, res) => {
  try {
    const searchText = req.query.searchText;
    const data = await Products.find({ productName: { $regex: searchText } }).limit(10);
    
    res.json({
      msg: 'success',
      productsList: data,
    });
  } catch (error) {
    res.status(500).json({ error: 'Opps, error occurred while searching products.' });
  }
};



// Get all product --->
// const getAllProducts = async (req, res) => {
//   // let data = await Products.find()
//   let data;

//   // for Search product
//   if (req.query.searchText) {
//     data = await Products.find({ productName: { $regex: req.query.searchText  } }).limit(req.query.size).limit(10)
//   }
//   else if (req.query.size) {
//     data = await Products.find().limit(req.query.size).skip((req.query.page - 1) * req.query.size)
//   }
//   else {
//     data = await Products.find()

//   }

//   const count = await Products.find().count()
//   if(data)  {
    
//     res.json({  
//     msg: 'success',
//     productsList: data,
//     count: count
//   })}
// }




// Get single product image 
const getProductImageById = async (req, res) => {
  const data = await Products.findById(req.params.id)
  const imageDir = path.join(__dirname, '../../', 'uploads/' + data.productImage)
  // const defaultDir = path.join(__dirname,'../../','uploads//nobike.jpeg') 

  if (fs.existsSync(imageDir)) {
    res.sendFile(imageDir)
  } else {
    // res.sendFile('Oops, Filed to load!!')
    console.log('Oops, Filed to load');
  }

}




// Get product details
const getProductsDetails = async (req, res) => {
  const product = await Products.findById(req.params.id)
  if (!product) {
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





module.exports = { addNewProducts, getAllProducts, getProductImageById, getProductsDetails, getSearchProduct };



