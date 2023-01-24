const mongoose=require("mongoose");
//const dotenv=require("dotenv");

mongoose.connect("mongodb://localhost:27017/trialdata",
).then(()=>{
    console.log("Database Connected Successfully");
}).catch((err)=>{
    console.log("No Connection to Database");
})