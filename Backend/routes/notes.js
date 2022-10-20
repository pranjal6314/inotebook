const express=require('express');
const router=express.Router();
const fetchuser=require("../middleware/fetchuser");
//for validation of input (input is empty or not)
const { body, validationResult } = require('express-validator');
const Notes=require("../models/Notes.js");




//Route1: Get all the notes using: GET "/api/notes/fetchallnotes". Login required
router.get('/fetchallnotes',fetchuser,async (req,res)=>{
    try {
        const notes=await Notes.find({user:req.user.id});
        res.json(notes);
        
    } catch (error) {
        console.log(error.message)
      res.status(500).send("Some Error Occured")
    }
})

//Route 2: add a new note useing : POST "/api/notes/addnote". Login required
router.post('/addnote',fetchuser,[
    body('title','enter a valid Title ').isLength({min:3}),
    body('description','Description must have atleast 5 characters').isLength({ min: 5 })
],async (req,res)=>{

    try {
     //if there  are error 
     const errors = validationResult(req);
     if (!errors.isEmpty()) {
        console.log("error");
       return res.status(400).json({ errors: errors.array() });
     }
     const {title,description,tag}=req.body;
     const note=new Notes({
            title,description,tag,user:req.user.id
     })
        const savedNotes=await note.save();
    res.json(savedNotes);
} catch (error) {
    console.log(error.message)
    res.status(500).send("Some Error Occured")
}
})
module.exports= router;