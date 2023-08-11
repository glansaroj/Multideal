
// Updated product schema
const mongoose = require('mongoose')
const productSchema = new mongoose.Schema({
    productName: String, 
    price: Number,
    quantity: Number,
    category: String,
    description: String,
    productImage: String,
  });
  
  const Products = mongoose.model('Products', productSchema);
  module.exports = Products