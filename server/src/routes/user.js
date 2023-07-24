
const express = require('express')  // Importing espress
const UsersController=require('../controller/user')
const app = express.Router();




app.post('/register',UsersController.registerUser ) 
app.get('/checkUserExists/:email',UsersController.checkIfUserExists)

module.exports=app;
