
const express = require('express')  
const VendorsController=require('../controller/vendor')
const router = express.Router();
const multer  = require('multer')

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, 'uploads/vendor')
    },
    filename: function (req, file, cb) {
      console.log(file)
      cb(null, Math.floor(Math.random() *100000)+ file.originalname)
    }
  })
  

const upload = multer({ storage: storage })



router.post('/register-seller',VendorsController.registerUser ) 