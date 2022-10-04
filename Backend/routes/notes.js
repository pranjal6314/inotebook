
const express=require("express");
const router=express.Router();

router.get("/",(req,res)=>{
    const b={
            name:"notes",
            dis:"backend"
    }
    res.json(b);
})

module.exports=router;

