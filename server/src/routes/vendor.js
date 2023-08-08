
const express = require('express')  
const VendorsController=require('../controller/vendor')
const router = express.Router();



router.post('/register-seller',VendorsController.registerUser ) 