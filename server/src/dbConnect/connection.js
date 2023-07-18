

const mongoose = require('mongoose');
const dbConfig = require('../config/dbConfig.json')


// console.log(`${dbConfig.MONGODB_CONNECTION_URI}/${dbConfig.MONGODB_DATABASE_NAME}`);


const connection = async() => {
    try{
      // await console.log(`${dbConfig.MONGODB_DATABASE_NAME}/${dbConfig.MONGODB_DATABASE_NAME}`)
      const res =  await  mongoose.connect(`${dbConfig.MONGODB_CONNECTION_URI}/${dbConfig.MONGODB_DATABASE_NAME}`);
      if(res) console.log("connected to mongodb");
    }catch (err){
        console.log(err)
    }
}

module.exports = connection;







// const mongoose = require('mongoose');
// const dbConfig = require('../config/dbConfig.json');
// mongoose.connect('mongodb://localhost:27017/multivendorDB');


// const connection = async () => {
//     try {
//     await mongoose.connect('mongodb://localhost:27017/multivendorDB');
//     if(res) console.log('mongodb connection');

//     } catch (error) {
//         console.log('Error !!!');
        
//     }

// }


