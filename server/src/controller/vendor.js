

const  Vendors = require('../models/vendors');
const path= require('path')
const fs =require('fs')


const registerSeller = async(req, res) => {
    await Users.findByIdAndUpdate(req.params.id,{ $set: {licenseNumber:req.body.licenseNumber,licenseImage: req.file.filename }})

}



// TODO: Need to Fixed this code ------->
// Register Seller:
const registerseller = async (req, res) => {
    try {

        // Setp-1 --> Checking Email addesss exist or not
        const data = await Users.findOne({ email: req.body.email })
        if (data) {
            res.status(409).json({
                msg: "Seller already exists",
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



module.exports = { registerSeller }