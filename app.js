const express=require("express");
const app=express();

require('./db/conn');
const User=require('./model/trialSchema');

app.get("/",(req,res)=>{
   res.send("Server is running");
});

app.get("/signup",(req,res)=>{
    res.send("Sign up page");
});

app.listen(8080,()=>{
   console.log("Listening to server 8080"); 
});