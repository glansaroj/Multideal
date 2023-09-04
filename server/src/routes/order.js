
const express = require('express')
const router = express.Router()
const OrdersController = require('../controller/orders')




// Endpoints --->

// Create a new order
router.post('/orders', OrdersController.createOrder);
