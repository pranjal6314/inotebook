import React from 'react'

const NoteItem = (props) => {
  return (
    
      <div className="col-md-3" >
        <div className="card-body card my-3">
            <h5 className="card-title">{props.note.title}</h5>
            <p className="card-text">{props.note.description}</p>
            {/* {font awesome icons for edit and delete} */}
            <div className="d-flex">
            <i className="fas fa-trash mx-2"></i>
            <i className="fas fa-edit mx-2"></i>
            </div>
        </div>
      </div>
  )
}

export default NoteItem
