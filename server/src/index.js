
// Express server configuration
const express = require('express');
const dotenv = require('dotenv').config();
const connection = require('./dbConnect/connection');
const  bodyParser = require("body-parser");


// Swagger ---> API Documentation
const swaggerJsdoc = require("swagger-jsdoc");
const swaggerUi = require("swagger-ui-express");


const userRoute = require('./routes/user')
const productRoute = require('./routes/products')


// Connection to Express server
connection()
const app = express()
const port = process.env.PORT || 5000;
app.use(express.json())


// Swagger API configuration
const options = {
  definition: {
    openapi: "3.1.0",
    info: {
      title: "MultiDeal E-commerce: API Documentation",
      version: "0.1.0",
      description: 
        "This is a MultiDeal E-commerce webApps's REST CRUD API made with Node/Express and documented with Swagger",

   
     
      license: {
        name: "MIT",
        url: "https://spdx.org/licenses/MIT.html",
      },

      termsOfService: {
        name: "Terms of Service",
        url: "http://swagger.io/terms/",
      },

      contact: {
        name: "the Developer",    
        email: "sarojt7475@gmail.com",
      },
    },
    servers: [
      {
        url: "http://localhost:5000",
      },
    ],
  },
  apis: ["./routes/*.js"],
};


const spec = swaggerJsdoc(options);
app.use(
  "/api-docs",
  swaggerUi.serve,
  swaggerUi.setup(spec, { explorer: true })
);



// converting body to json format
const cors = require('cors');
app.use(cors());
app.use("/", userRoute)
app.use("/", productRoute)



app.listen(port, () => {
  console.log(`Your app is listening on port ${port}`)
})























