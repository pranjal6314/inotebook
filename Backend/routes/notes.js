const express = require("express");
const router = express.Router();
const fetchuser = require("../middleware/fetchuser");
//for validation of input (input is empty or not)
const { body, validationResult } = require("express-validator");
const Notes = require("../models/Notes.js");

//Route1: Get all the notes using: GET "/api/notes/fetchallnotes". Login required
router.get("/fetchallnotes", fetchuser, async (req, res) => {
  try {
    const notes = await Notes.find({ user: req.user.id });
    res.json(notes);
  } catch (error) {
    console.log(error.message);
    res.status(500).send("Some Error Occured");
  }
});

//Route 2: add a new note useing : POST "/api/notes/addnote". Login required
router.post("/addnote",fetchuser,
  [
    body("title", "enter a valid Title ").isLength({ min: 3 }),
    body("description", "Description must have atleast 5 characters").isLength({
      min: 5,
    }),
  ],
  async (req, res) => {
    try {
      //if there  are error
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        console.log("error");
        return res.status(400).json({ errors: errors.array() });
      }
      const { title, description, tag } = req.body;
      const note = new Notes({
        title,
        description,
        tag,
        user: req.user.id,
      });
      const savedNotes = await note.save();
      res.json(savedNotes);
    } catch (error) {
      console.log(error.message);
      res.status(500).send("Some Error Occured");
    }
  }
);

//Route3 : update the an existing Note using: PUT "/api/notes/updatenote". Login required
router.put("/updatenote/:id", fetchuser, async (req, res) => {
  const { title, description, tag } = req.body;
  try {
    
  
  //create a newNote object
  const newNote = {};
  if (title) {
    newNote.title = title;
  }
  if (description) {
    newNote.description = description;
  }
  if (tag) {
    newNote.tag = tag;
  }
  // if(!title||!description||!tag){
  //     return res.status(400).send("Please enter all the fields");
  // }
  //fing the note to updated and update it
  let note = await Notes.findById(req.params.id); //id given in the url
  //note is not found
  if (!note) {
    return res.status(404).send("Not Found");
    // console.log("not found");
  }
  //if one user wants to update note of another user
  if (note.user.toString() !== req.user.id) {
    return res.status(401).send("You Do Not Allowed To Update This Note");
  }

  //everthing is ok , now update the note
  note = await Notes.findByIdAndUpdate(
    req.params.id,
    { $set: newNote },
    { new: true }
  );
  res.json({ note });
}catch (error) {
    console.log(error.message);
    res.status(500).send("Some Error Occured");
  }
});


//Route4 : Delete the an existing Note using: PUT "/api/notes/deletenote". Login required
router.delete('/deletenote/:id',fetchuser,async (req,res)=>{
    try {
        
    
    //find the note to be deleted and delete it
    let note=await Notes.findById(req.params.id);
    //note is not found
    if(!note){res.status(404).send("Not Found");}
    //if one user wants to delete note of another user
    if(note.user.toString()!==req.user.id){res.status(401).send("You Do Not Allowed To Delete This Note");}
    //everthing is ok , now delete the note
    note=await Notes.findByIdAndDelete(req.params.id);
    res.json({"Success":"Note has been deleted",note:note});
}  catch (error) {
    console.log(error.message);
    res.status(500).send("Some Error Occured");
  }
})

module.exports = router;
