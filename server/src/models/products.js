
// User Schemas:
const mongoose = require('mongoose');
const { Schema } = mongoose;



const productSchema = new mongoose.Schema({
    name: {
      type: String,required: true,
    },
    description: {
      type: String,required: true,
    },
    price: {
      type: Number,required: true,
    },
    discount: {
        type: Number,required: true,
      },
    category: {
      type: String,required: true,
    },
    imageUrl: {
      type: String,required: true,
    },
    ratings: [{
      user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
      },
      rating: {
        type: Number,required: true,
      },
    }],
    reviews: [{
      user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
      },
      text: {
        type: String,
        required: true,
      },
    }],
  }, );


const Product = mongoose.model('Product', productSchema);
module.exports = Product;