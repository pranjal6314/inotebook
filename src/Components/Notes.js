import React, { useEffect,useRef ,useContext,useState } from 'react'
import noteContext from '../Context/notes/NoteContext';
import Addnote from './Addnote';
import NoteItem  from './NoteItem';
function Notes() {
    const context=useContext(noteContext);
    const {notes,getAllNotes,editNote}=context;
  useEffect(() => {
    getAllNotes();
    // eslint-disable-next-line
  },[]);
  
  const ref=useRef(null);
  const refclose=useRef(null);
  const [note,setNote]=useState({id:"",etitle:"",edescription:"",etag:""});
  const updatenote=(currentNote)=>{
    editNote(note.id,note.etitle,note.edescription,note.etag);
      ref.current.click();
      setNote({ id:currentNote._id, etitle:currentNote.title,edescription:currentNote.description,etag:currentNote.tag});
  }
  const handleClick=(e)=>{
    ref.current.click();
    console.log("hi")
}
const onchange=(e)=>{
        setNote({...note,[e.target.name]:e.target.value});
}
  return (
    
    <>
          {/* <!-- Button trigger modal --> */}
<button type="button" ref={ref} className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
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
                        <input type="text" className="form-control" id="etitle" name='etitle' value={note.etitle} aria-describedby="emailHelp" onChange={onchange}  />
                      </div>
                      <div className="mb-3">
                        <label htmlFor="edescription" className="form-label">Description</label>
                        <input type="text" name='edescription' className="form-control" value={note.edescription} id="edescription" onChange={onchange} />
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
                <button type="button" onClick={handleClick} className="btn btn-primary">Update Note</button>
              </div>
            </div>
          </div>
        </div>




    <Addnote/>
    <div className='row my-3'>
      <h2>Your Notes</h2>
      {notes.map((note)=>{
        return <NoteItem key={note._id} updatenote={updatenote} note={note}/>
         
      })} 
    </div>
    </>
  )
}

export default Notes
