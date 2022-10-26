import React,{useState} from 'react'

import {useContext } from 'react';
import noteContext from '../Context/notes/NoteContext';
const Addnote = () => {
    const context=useContext(noteContext);
    const {addNote}=context;
    const [note,setNote]=useState({title:"",description:"",tag:"default"});
    const handleClick=(e)=>{
        e.preventDefault();
        addNote(note.title,note.description,note.tag);
    }
    const onchange=(e)=>{
            setNote({...note,[e.target.name]:e.target.value});
    }
  return (
    <div>
      <h1>Add Your Notes</h1>
      <form>
        <div className="mb-3">
          <label htmlFor="title " className="form-label">Title</label>
          <input type="text" className="form-control" id="title" name='title' aria-describedby="emailHelp" onChange={onchange}  />
        </div>
        <div className="mb-3">
          <label htmlFor="description" className="form-label">Description</label>
          <input type="text" name='description' className="form-control" id="description" onChange={onchange} />
        </div>
        <div className="mb-3 form-check">
          {/* <input type="checkbox" className="form-check-input" id="exampleCheck1" onChange={onchange} /> */}
          <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
        </div>
        <button type="submit" className="btn btn-primary" onClick={handleClick}>Add Note</button>
      </form>
    </div>
  )
}

export default Addnote
