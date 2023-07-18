

// //////no////////////////////////////////////

const express = require('express')
require('dotenv').config()
const connection = require('./dbConnect/connection')
const Users = require('./models/users')
connection()
const app = express()
const port = process.env.PORT
app.use(express.json())


// app.post('/register', async(req, res) => {
//   await Users.create(req.body)
//   res.json({
//     msg: "Cpmgrats, you are successfully registered!"
//   })
// })

// Post methods
app.post('/register', async (req, res) => {
  await Products.create(req.body)
  res.json({
  msg: "Congrats, you are successfully registered!"
  })
 })
  


 app.listen(port, () => {
    console.log(`Your app is listening on port ${port}`)
  })
 





