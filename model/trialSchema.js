const mongoose=require('mongoose');

const trialSchema= new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    gender:{
        type:String,
        required:true
    },
    dob:{
        type:Date
    },
    contact:{
        type:String,
        required:true 
    },
    role:{
        type:String,
        enum:["ADMIN","USER"],
        default:"USER",
    },
    create:{
        type:Date,
        default:Date.now
    },
    modify:{
        type:Date,
        default:Date.now
    }
})

//creating a collection
const User= new mongoose.model('User',trialSchema);

module.exports=User;