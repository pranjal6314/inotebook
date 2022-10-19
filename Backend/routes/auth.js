//open backend folder and start terminal with nodemon ./index.js
const jwt = require('jsonwebtoken');
const bcrypt=require("bcryptjs");
const express=require("express");
const fetchuser=require("../middleware/fetchuser");
const router=express.Router();
const User=require("../models/User.js");
const { body, validationResult } = require('express-validator');
const JWT_SECRET="Iamgoodboy";
//Route1 : creating a User using :Post "/api/auth/CreateUser" . login Doesn't require

router.post("/CreateUser",[
       body('email','enter a valid mail id').isEmail(),
       body('name').isLength({min:4}),
       body('password','password must have atleast 5 characters').isLength({ min: 5 }),
], async (req,res)=>{
  //if there  are error 
       const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    // check wheather email already exit
    try{

    
    let user=await User.findOne({email:req.body.email});
    console.log(user);
    if(user){
      return res.status(400).json({error:"sorry a user with this mail is already exit"});
    }

    const salt=await bcrypt.genSalt(10);
  const  securePassward= await bcrypt.hashSync(req.body.password,salt);
    //creating a new user 
   user=await User.create({

       name: req.body.name,
       email: req.body.email,
       password: securePassward,
     });

     //creating a authtoken for user 
      const data={
        user:{
          id:user.id
        }
      }
    const authtoken= jwt.sign(data,JWT_SECRET);
    //  .then(user => res.json(user)).catch(err=>{res.json({error :"please enter a unique value for email",message :err.message})});
      //  res.json({user})
      res.json({authtoken});
    }catch(error){
      console.log(error.message)
      res.status(500).send("Some Error Occured")
    }
})


//Route2 : Authenticate a User using :Post "/api/auth/CreateUser" . Doesn't require login 

router.post("/login",[
  body('email','enter a valid mail id').isEmail(),
  body('password','password can not be blank').exists(),
], async (req,res)=>{

     //if there  are error , return bad req and error
     const errors = validationResult(req);
     if (!errors.isEmpty()) {
       return res.status(400).json({ errors: errors.array() });
     }

     const {email,password}=req.body;
      try{
          let user= await User.findOne({email});
          if(!user){
            return res.status(400).json({error:"please try to login with correct credentials"})
          }
            const passwordCompare=await bcrypt.compare(password,user.password);
            
            if(!passwordCompare){
              return res.status(400).json({error:"please try to login with correct credentials"})
            };
            //creating a authtoken for user 
      const data={
        user:{
          id:user.id
        }
      }
      const authtoken= jwt.sign(data,JWT_SECRET);
   
      res.json({authtoken});
      }catch(error){
        console.log(error)
        res.status(500).send("Internal Server Error")
      }

})


//Route3: Get loggedin User Details using :Post "/api/auth/getuser" . Doesn't require login 
//fetchuser is a middleware which will fetch the user from jwt token and add id to req object

router.post("/getuser",fetchuser, async (req,res)=>{
try {
  const user=await User.findById(req.user.id).select("-password");
  res.send(user);
} catch (error) {
  console.log(error)
        res.status(500).send("Internal Server Error")
}
})
module.exports =router;