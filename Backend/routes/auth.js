const express=require("express");
const router=express.Router();
const User=require("../models/User.js");
// creating a User using :Post "/api/auth/" . Doesn't require Authentication 

router.post("/",(req,res)=>{
       console.log(req.body);
       const user=new User(req.body);
       user.save();
       res.send(req.body);
})

module.exports =router;