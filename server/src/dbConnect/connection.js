

const mongoose = require('mongoose');
const dbConfig = require('../config/dbConfig.json');
mongoose.connect('mongodb://localhost:27017/multivendorDB');


const connection = async () => {
    try {
    await mongoose.connect('mongodb://localhost:27017/multivendorDB');
    if(res) console.log('mongodb connection');

    } catch (error) {
        console.log('Error !!!');
        
    }

}