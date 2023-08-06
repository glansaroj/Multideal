
const Users = require('../models/users')
// Importing bcrypt (pass hasing liabraries)
const bcrypt = require('bcrypt');
const saltRounds = 10;

const jwt = require('jsonwebtoken');



//  User Register with password hashing
const registerUser = async (req, res) => {
    try {

        // Setp-1 --> Checking Email addesss exist or not
        const data = await Users.findOne({ email: req.body.email })
        if (data) {
            res.status(409).json({
                msg: "Email address already exists",
                success: false
            })

        } else {

            // Step-2 --> Genreating hash password from user password 
            req.body.password = await bcrypt.hash(req.body.password, saltRounds);

            // Step-3 --> Creating JWT (Token) for user
            const token = jwt.sign({ email: req.body.email }, 'process.env.SECRET_KEY');
            // await Users.create(req.body);
            const data = await Users.create(req.body)
            if (data) {
                const { password, ...otherFields } = data._doc
                res.json({
                    msg: "you are successfully registered",
                    success: true,
                    token,
                    userDetails: otherFields
                })
            }

        }

    } catch (err) {
        console.log(err)
    }


}


// LoginUser
const loginUser = async (req, res) => {
    try {
        const data = await Users.findOne({ email: req.body.email })
        if (data) {
            const isMatched = await bcrypt.compare(req.body.password, data.password)
            if (isMatched) {
                const token = jwt.sign({ email: req.body.email }, process.env.SECRET_KEY);
                res.json({
                    token: token,
                    success: true,
                    userDetails: data
                })
            } else {
                res.json({
                    success: false,
                    msg: "Password didn't matched"
                })
            }
        } else {
            res.json({
                success: false,
                msg: "Email doesn't exist"
            })
        }
    } catch (err) {
        console.log(err)
    }

}





module.exports = { registerUser, loginUser };



//////////////////////////////////////////////////////////////////////////



// User register
// const registerUser=async(req, res) => {
//     await Users.create(req.body)
//     res.json({
//       msg: "Congrats, you are successfully registered!"
//     })
//   }







