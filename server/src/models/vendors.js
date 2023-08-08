
// vendor Schemas:
const mongoose = require('mongoose');
const { Schema } = mongoose;


const vendorSchema = new mongoose.Schema({
    
    // phoneNumber: Number,
    firstName: {type:String, required: true}, // String is shorthand for {type: String}
    lastName: {type:String, required: true},
    email: String,
    address: String,
    password: String,
    confirmPassword: "",
    address: String,
    // shopDetails: Object,
    phoneNumber: Number,
    shopName: String,
    shopAddress: String,
    logo: String,

  });
  
  const Vendors = mongoose.model('Vendors', userSchema);
  module.exports = Vendors
