const express=require("express");
const router=express.Router();
const User=require("../models/User.js");
const { body, validationResult } = require('express-validator');

// creating a User using :Post "/api/auth/" . Doesn't require Authentication 

router.post("/",[
       body('email','enter a valid mail id').isEmail(),
       body('name').isLength({min:4}),
       body('password','password must have atleast 5 characters').isLength({ min: 5 }),
],(req,res)=>{
       const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    User.create({

       name: req.body.name,
       email: req.body.email,
       password: req.body.password,
     }).then(user => res.json(user)).catch(err=>{res.json({error :"please enter a unique value for email",message :err.message})});
       
})

module.exports =router;