
const express = require('express')  // Importing espress
const UsersController=require('../controller/user')
const app = express.Router();



// app.get('/checkUserExists/:email',UsersController.checkIfUserExists)
app.post('/register',UsersController.registerUser ) 

module.exports=app;
