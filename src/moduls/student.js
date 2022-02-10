const mongoose = require("mongoose");
const validator = require("validator");
const studentSchema = new mongoose.Schema({
    // name: {
    //     type:String,
    //     required:true,
    //     minlength:3
    // },
    
    // email:{
    //     type:String,
    //     required:true,
    //     unique:[true,"Email id alredy present"],
    //     validate(value){
    //         if(validator.isEmail(value)){
    //             throw new Error("Invalid Email")
    //         }
    //     }
    // },
    // phone:{
    //     type:Number,
    //     min:10,
    //     max:10,
    //     required:true,
    //     unique:true
    // },
    // address:{
    //     type:String,
    //     required:true
    // }
    name:String,
    email:String,
    phone:Number,
    address:String
    
})

const Student = new mongoose.model('Student', studentSchema);

module.exports = Student;