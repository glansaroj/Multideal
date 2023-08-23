
const express = require('express')
const UsersController = require('../controller/user')
const router = express.Router();




/**
 * @swagger
 * components:
 *   schemas:
 *     Users:
 *       type: object
 *       required:
 *       - fullName
 *       - email
 *       - password
 *       - mode
 *       properties:
 *         id:
 *           type: string
 *           description: The auto-generated id of the users
 *         fullName:
 *           type: string
 *           description: Name of the user
 *         email:
 *           type: string
 *           description: email of the user
 *         password:
 *           type: string
 *           description: password of the user
 *         mode:
 *           type: string     
 *           description: user mode
 *      example:
 *         id: 2309ujlkkj9u
 *         fullName: Hari Thapa
 *         email: hari@gmail.com
 *         password: hari@123
 *         mode: user
 */




// router.get('/email-availabe/:email',UsersController.checkIfUserExists)
router.post('/register', UsersController.registerUser)
router.post('/login', UsersController.loginUser)



// For ulpoading image
// router.put()

module.exports = router;






