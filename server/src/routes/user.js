
const express = require('express')  // Importing espress
const UsersController=require('../controller/users')
const app = express.Router();




app.post('/register',UsersController.registerUser ) 
app.get('/checkUserExists/:phoneNumber',UsersController.checkIfUserExists)

module.exports=app;
