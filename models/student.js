const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const studentSchema = new Schema({
    name:{
        type:String,
        required:true
    },
    rollNo:{
        type:String,
        unique:true,
        required:true
    },
    email:{
        type:String,
        unique:true,
        required:true
    },
    phone:{
        type:String,
        required:true
    },
    branch:{
        type:String,
        required:true
    },
    fine: {
        type: Number,
        default: 0,
        min: 0
    }
}, {
    timestamps: true
});

const Student = mongoose.model("Student",studentSchema);

module.exports = Student;