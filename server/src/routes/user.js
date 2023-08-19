
const express = require('express')  
const UsersController=require('../controller/user')
const router = express.Router();


// router.get('/email-availabe/:email',UsersController.checkIfUserExists)
router.post('/register',UsersController.registerUser ) 
router.post('/login', UsersController.loginUser)



// For ulpoading image
// router.put()

module.exports=router;


////////////////////////////////////////



