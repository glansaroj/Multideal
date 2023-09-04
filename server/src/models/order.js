
// Order schema
const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Users',
        required: true,
    },

    products: [
        {
            productName: {
                type: String,
                ref: 'Products',
                required: true,
            },

            price: {
                type: Number,
                required: true,
            },

            category: String,

            quantity: {
                type: Number,
                required: true,
                min: 1,
            },
        },
    ],

    totalAmount: {
        type: Number,
        required: true,
        min: 1,
    },

    shippingAddress: {
        type: String,
        required: true,
        trim: true,
    },

    status: {
        type: String,
        enum: ['Pending', 'Processing', 'Shipped', 'Delivered', 'Cancelled'],
        default: 'Pending',
    },

    createdAt: {
        type: Date,
        default: Date.now,
    },
},
    { timestamps: true }    // Adding the timestamps option for created & updated order
);

const Order = mongoose.model('Order', orderSchema);
module.exports = Order;


