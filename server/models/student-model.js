
const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Student = new Schema(
    {
     first_name:{type:String,required:true},   
     last_name:{type:String, required:true},
     student_class:{type:String, required:true},
     lessons:{type:Number, required:true}
 },
 { timestamps: true },
 )
 module.exports= mongoose.model('students', Student)