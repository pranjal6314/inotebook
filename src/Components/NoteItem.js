import React,{useContext} from 'react'

import noteContext from '../Context/notes/NoteContext';
const NoteItem = (props) => {
  const context=useContext(noteContext);
  const {deleteNote,editNote}=context;
  return (
    
      <div className="col-md-3" >
        <div className="card-body card my-3">
            <h5 className="card-title">{props.note.title}</h5>
            <p className="card-text">{props.note.description}</p>
            {/* {font awesome icons for edit and delete} */}
            <div className="d-flex">
            <i className="fas fa-trash mx-2" onClick={()=>{deleteNote(props.note._id)}}></i>
            <i className="fas fa-edit mx-2" onClick={()=>{props.updatenote(props.note)}}></i>
            </div>
        </div>
      </div>
  )
}

export default NoteItem
