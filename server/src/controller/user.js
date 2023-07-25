
const Users=require('../models/user')

// Importing bcrypt (pass hasing liabraries)
const bcrypt = require('bcrypt');
const saltRounds = 10;


//  User Register with password hashing
const registerUser=  async(req, res) => {
    try{
        // Checking Email addesss exist or not
        const data= await Users.findOne({email:req.body.email })
        if(data){
            res.status(409).json({
                msg: "Email address already exists",
                success: false
            })
            
        }else{
                // Genreating hash password from user password 
                req.body.password = await bcrypt.hash(req.body.password, saltRounds);
                await Users.create(req.body);
                res.json({
                    msg: "you are successfully registered",
                    success: true
                })
        
        }
      
    }catch(err){
       console.log(err)
    }
 
  
}



module.exports={registerUser}




// User register 
// const registerUser=async(req, res) => {
//     await Users.create(req.body)
//     res.json({
//       msg: "Congrats, you are successfully registered!"
//     })
//   }







