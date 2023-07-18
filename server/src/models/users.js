

// User Schemas:
const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    fullName: {type:String, required: true}, // String is shorthand for {type: String}
    phoneNumber: Number,
    email: String,
    password: String,
    mode: {type: String, default: 'User'},
    vendorDetails: Object
  });
  
  const Users = mongoose.model('Users', userSchema);
  module.exports = Users


  

// Product schema
// const productSchema = new Schema({
//     productName: String, // String is shorthand for {type: String}
//     productPrice: Number,
//     description: String,
//     image: String,
//     category: String,
//     flag: {type: String, default:'valid'}
//    });
    
//    const Products = mongoose.model('Product', productSchema);

//    module.exports = Products;


   