

// //////////////////////////////////////////

const express = require('express')  // Importing espress
const dotenv = require('dotenv').config()
const connection = require('./dbConnect/connection')
const Users = require('./models/users')
connection()
const app = express()

const port = process.env.PORT;
app.use(express.json())

// converting body to json format
const cors=require('cors');
app.use(cors());



// Post methods
app.post('/register', async (req, res) => {
  try { await
    Users.create(req.body)
    res.json({
    msg: "Congrats, you are successfully registered!"
    })
  }
  catch(err){
    res.json({
      msg:"Opps! Registration failed."
    })
    console.log("User Registration failed.")
  }
 })
  


 app.listen(port, () => {
    console.log(`Your app is listening on port ${port}`)
  })
 


   





// app.post('/register', async(req, res) => {
//   await Users.create(req.body)
//   res.json({
//     msg: "Cpmgrats, you are successfully registered!"
//   })
// })




