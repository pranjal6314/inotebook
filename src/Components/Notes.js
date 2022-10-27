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
        {/* <!-- Modal --> */}
        <div className="modal fade" id="exampleModal"  tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel">Edit Note</h5>
                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div className="modal-body">

                            <form>
                      <div className="mb-3">
                        <label htmlFor="etitle " className="form-label">Title</label>
                        <input type="text" minLength={5} required className="form-control" id="etitle" name='etitle' value={note.etitle} aria-describedby="emailHelp" onChange={onchange}  />
                      </div>
                      <div className="mb-3">
                        <label htmlFor="edescription" className="form-label">Description</label>
                        <input type="text" minLength={5} required name='edescription' className="form-control" value={note.edescription} id="edescription" onChange={onchange} />
                      </div>
                      <div className="mb-3">
                        <label htmlFor="etag" className="form-label">Tag</label>
                        <input type="text" name='etag' className="form-control" id="etag" value={note.etag}onChange={onchange} />
                      </div>
                    
                      {/* <button type="submit" className="btn btn-primary" >Add Note</button> */}
                    </form>


              </div>
              <div className="modal-footer">
                <button type="button" ref={refclose} className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                <button disabled={note.etitle.length<5 || note.edescription.length<5}  type="button" onClick={handleClick} className="btn btn-primary">Update Note</button>
              </div>
            </div>
          </div>
        </div>




   
    <div className='row my-3'>
      <h2>Your Notes</h2>
      {notes.length===0 &&'No Notes to display'}
      {notes.map((note)=>{
        return <NoteItem key={note._id} updatenote={updatenote} showAlert={props.showAlert}note={note}/>
         
      })} 
    </div>
    </>
  )
}

export default Notes
