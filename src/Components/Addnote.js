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
    // <div>
    //   <h1>Add Your Notes</h1>
    //   <form>
    //     <div className="mb-3">
    //       <label htmlFor="title " className="form-label">Title</label>
    //       <input type="text" className="form-control" id="title"minLength={5} value={note.title} required name='title' aria-describedby="emailHelp" onChange={onchange}  />
    //     </div>
    //     <div className="mb-3">
    //       <label htmlFor="description" className="form-label">Description</label>
    //       <input type="text" name='description'minLength={5} value={note.description} required className="form-control" id="description" onChange={onchange} />
    //     </div>
    //     <div className="mb-3">
    //       <label htmlFor="tag" className="form-label">Tag</label>
    //       <input type="text" name='tag'minLength={5} value={note.tag} required className="form-control" id="tag" onChange={onchange} />
    //     </div>
       
    //     <button  disabled={note.title.length<5 || note.description.length<5} type="submit" className="btn btn-primary" onClick={handleClick}>Add Note</button>
    //   </form>
    // </div>

    <div className="mx-auto max-w-screen-lg">
  <div className="text-center">
    <h1 className="text-3xl font-bold mb-4">Add Your Notes</h1>
  </div>
  <form>
    <div className="mb-4">
      <label htmlFor="title" className="block text-sm font-bold text-black">Title</label>
      <input
        type="text"
        className="form-input mt-1 block w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring focus:border-blue-300"
        id="title"
        minLength={5}
        value={note.title}
        required
        name="title"
        onChange={onchange}
      />
    </div>
    <div className="mb-4">
      <label htmlFor="description" className="block text-sm font-bold text-black">Description</label>
      <input
        type="text"
        name="description"
        minLength={5}
        value={note.description}
        required
        className="form-input mt-1 block w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring focus:border-blue-300"
        id="description"
        onChange={onchange}
      />
    </div>
    <div className="mb-4">
      <label htmlFor="tag" className="block text-sm font-bold text-black">Tag</label>
      <input
        type="text"
        name="tag"
        minLength={5}
        value={note.tag}
        required
        className="form-input mt-1 block w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring focus:border-blue-300"
        id="tag"
        onChange={onchange}
      />
    </div>
    <div className="text-center">
  <button
    type="submit"
    className={`btn ${note.title.length < 5 || note.description.length < 5 ? 'bg-gray-500 cursor-not-allowed' : 'bg-blue-500 hover:bg-blue-700 active:bg-blue-800'} text-black font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline-blue`}
    onClick={handleClick}
    disabled={note.title.length < 5 || note.description.length < 5}
  >
    Add Note
  </button>
</div>


  </form>
</div>

  )
}

export default Addnote
