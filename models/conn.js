const mongoose = require("mongoose");

const connectDB = async () => {
    try{
        await mongoose.connect("mongodb://localhost:27017/library");
        console.log("Connected to MongoDB");
    }catch(err){
        console.log("Error connecting to MongoDB",err);
    }
};

module.exports = connectDB;