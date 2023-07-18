
const { Schema } = mongoose;
mongoose.connect('mongodb://localhost:27017/muliVendorDb');

// //////////////////////////////////////////

const express = require('express')
require('dotenv').config()
const connection = require('./db/connection')
const Users = require('./models/users')
connection()
const app = express()
const port = process.env.PORT
app.use(express.json())


app.post('/register', async(req, res) => {
  await Users.create(req.body)
  res.json({
    msg: "Cpmgrats, you are successfully registered!"
  })
})



 app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  })
 


// Post methods
app.post('/products', (req, res) => {
 Products.create(req.body)
 res.json({
 msg: "products"
 })
})
 



// app.get('/products', async(req, res) => {
//  const data = await Products.find()
// })
 
// app.put('/products/:id', async(req, res) => {
//  await Products.findByIdAndUpdate(req.params.id, req.body)
//  })
 
//  app.delete('/products/:id', async(req, res) => {
//  await Products.findByIdAndDelete(req.params.id)
//  })
 
//  app.get('/products', async(req, res) => {
//  const data = await Products.find()
//  })



//  app.listen(port, () => {
//     console.log(`Example app listening on port ${port}`)
//   })
 

//   require('dotenv').config()
//   console.log(process.env.port) //


