import React, { useEffect,useRef ,useContext,useState } from 'react'
import noteContext from '../Context/notes/NoteContext';
import Addnote from './Addnote';
import NoteItem  from './NoteItem';
import {useNavigate}  from 'react-router-dom'
function Notes(props) {
    const context=useContext(noteContext);
    const history = useNavigate()
    const {notes,getAllNotes,editNote}=context;
  useEffect(() => {
    if(localStorage.getItem('token')){ //token is present in local storage then only we will get all notes
    getAllNotes();
    // eslint-disable-next-line
    }else{
      history('/Login');
    }
  },[]);
  
  const ref=useRef(null);
  const refclose=useRef(null);
  const [note,setNote]=useState({id:"",etitle:"",edescription:"",etag:""});
  const updatenote=(currentNote)=>{
      ref.current.click();
      setNote({ id:currentNote._id, etitle:currentNote.title,edescription:currentNote.description,etag:currentNote.tag});
      
  }
  const handleClick=(e)=>{
    ref.current.click();
    editNote(note.id,note.etitle,note.edescription,note.etag);
    console.log("hi")
    props.showAlert("Updated Successfully","success");
}
const onchange=(e)=>{
        setNote({...note,[e.target.name]:e.target.value});
}
  return (
    
    <>
            <Addnote showAlert={props.showAlert}/>
          {/* <!-- Button trigger modal --> */}
<button type="button" ref={ref} style={{}} className="btn btn-primary d-none" data-bs-toggle="modal" data-bs-target="#exampleModal">
  Launch demo modal
</button>
        {/* <!-- Modal  --> */}
        {/* <div className="modal fade fixed w-full h-full top-0 left-0 flex items-center justify-center" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div className="modal-dialog">
    <div className="modal-content">
      <div className="modal-header bg-gray-700 text-white">
        <h5 className="modal-title" id="exampleModalLabel">Edit Note</h5>
        <button type="button" className="close" data-bs-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div className="modal-body p-4">
        <form>
          <div className="mb-3">
            <label htmlFor="etitle" className="block text-sm font-bold text-gray-700">Title</label>
            <input
              type="text"
              minLength={5}
              required
              className="form-input mt-1 block w-full border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-300"
              id="etitle"
              name="etitle"
              value={note.etitle}
              onChange={onchange}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="edescription" className="block text-sm font-bold text-gray-700">Description</label>
            <input
              type="text"
              minLength={5}
              required
              name="edescription"
              className="form-input mt-1 block w-full border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-300"
              id="edescription"
              value={note.edescription}
              onChange={onchange}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="etag" className="block text-sm font-bold text-gray-700">Tag</label>
            <input
              type="text"
              name="etag"
              className="form-input mt-1 block w-full border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-300"
              id="etag"
              value={note.etag}
              onChange={onchange}
            />
          </div>
        </form>
      </div>
      <div className="modal-footer bg-gray-200">
        <button
          type="button"
          ref={refclose}
          className="btn bg-gray-500 text-white hover:bg-gray-700 focus:outline-none focus:shadow-outline-gray"
          data-bs-dismiss="modal"
        >
          Close
        </button>
        <button
          disabled={note.etitle.length < 5 || note.edescription.length < 5}
          type="button"
          onClick={handleClick}
          className={`btn ${note.etitle.length < 5 || note.edescription.length < 5 ? 'bg-gray-500 cursor-not-allowed' : 'bg-blue-500 hover:bg-blue-700 active:bg-blue-800'} text-white focus:outline-none focus:shadow-outline-blue`}
        >
          Update Note
        </button>
      </div>
    </div>
  </div>
</div> */}



<div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div className="modal-dialog">
    <div className="modal-content">
    <div className="modal-header bg-gray-700 text-white">
        <h5 className="modal-title" id="exampleModalLabel">Edit Note</h5>
        <button type="button" className="close" data-bs-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      
      </div>
      <div className="modal-body">

        <form>
          <div className="mb-3">
          <label htmlFor="etitle" className="block text-sm font-bold text-gray-700">Title</label>
            <input
              type="text"
              minLength={5}
              required
              className="form-control"
              id="etitle"
              name="etitle"
              value={note.etitle}
              aria-describedby="emailHelp"
              onChange={onchange}
              style={{ color: '#333', borderColor: '#ccc' }} // Text color and border color
            />
          </div>
          <div className="mb-3">
          <label htmlFor="edescription" className="block text-sm font-bold text-gray-700">Description</label>
            <input
              type="text"
              minLength={5}
              required
              name="edescription"
              className="form-control"
              value={note.edescription}
              id="edescription"
              onChange={onchange}
              style={{ color: '#333', borderColor: '#ccc' }} // Text color and border color
            />
          </div>
          <div className="mb-3">
          <label htmlFor="etag" className="block text-sm font-bold text-gray-700">Tag</label>
            <input
              type="text"
              name="etag"
              className="form-control"
              id="etag"
              value={note.etag}
              onChange={onchange}
              style={{ color: '#333', borderColor: '#ccc' }} // Text color and border color
            />
          </div>

          {/* <button type="submit" className="btn btn-primary">Add Note</button> */}
        </form>

      </div>
      <div className="modal-footer">
        <button type="button" ref={refclose} className="btn btn-secondary" data-bs-dismiss="modal" style={{ color: '#fff', backgroundColor: '#6c757d' }}>Close</button>
        <button disabled={note.etitle.length < 5 || note.edescription.length < 5} type="button" onClick={handleClick} className="btn btn-primary" style={{ color: '#fff', backgroundColor: '#007bff', borderColor: '#007bff' }}>Update Note</button>
      </div>
    </div>
  </div>
</div>

   
  
  <div className="container mx-auto my-3 bg-gray-100 p-4 rounded">
  <h2 className="text-2xl font-semibold mb-4">Your Notes</h2>
  
  {notes.length === 0 && <p className="text-gray-600">No Notes to display</p>}

  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
    {notes.map((note) => (
      <div key={note._id} className="bg-white p-4 rounded-md shadow-md">
        <NoteItem updatenote={updatenote} showAlert={props.showAlert} note={note} />
      </div>
    ))}
  </div>
</div>





    </>
  )
}

export default Notes
