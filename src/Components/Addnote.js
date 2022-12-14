import React,{useState} from 'react'

import {useContext } from 'react';
import noteContext from '../Context/notes/NoteContext';
const Addnote = (props) => {
    const context=useContext(noteContext);
    const {addNote}=context;
    const [note,setNote]=useState({title:"",description:"",tag:""});
    const handleClick=(e)=>{
        e.preventDefault();
        addNote(note.title,note.description,note.tag);
        setNote({title:"",description:"",tag:""});
        props.showAlert("Added Successfully","success");
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
          <input type="text" className="form-control" id="title"minLength={5} value={note.title} required name='title' aria-describedby="emailHelp" onChange={onchange}  />
        </div>
        <div className="mb-3">
          <label htmlFor="description" className="form-label">Description</label>
          <input type="text" name='description'minLength={5} value={note.description} required className="form-control" id="description" onChange={onchange} />
        </div>
        <div className="mb-3">
          <label htmlFor="tag" className="form-label">Tag</label>
          <input type="text" name='tag'minLength={5} value={note.tag} required className="form-control" id="tag" onChange={onchange} />
        </div>
       
        <button  disabled={note.title.length<5 || note.description.length<5} type="submit" className="btn btn-primary" onClick={handleClick}>Add Note</button>
      </form>
    </div>
  )
}

export default Addnote
