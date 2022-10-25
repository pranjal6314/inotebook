import React, { useContext } from 'react'
import noteContext from '../Context/notes/noteContext';

export const Home=()=> {
  const context=useContext(noteContext);
  const {notes,setNotes}=context;
  return (
    
    <div className='container my-3'>
      <h1>Add Your Notes</h1>
      <form>
        <div className="mb-3">
          <label for="exampleInputEmail1" className="form-label">Email address</label>
          <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
          <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
        </div>
        <div className="mb-3">
          <label for="exampleInputPassword1" className="form-label">Password</label>
          <input type="password" className="form-control" id="exampleInputPassword1" />
        </div>
        <div className="mb-3 form-check">
          <input type="checkbox" className="form-check-input" id="exampleCheck1" />
          <label className="form-check-label" for="exampleCheck1">Check me out</label>
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
      <h1>Your Notes</h1>
      {notes.map((note)=>{
        return <div className="card my-3"   >
        <div className="card-body">
          <h5 className="card-title">{note.title}</h5>
          <p className="card-text">{note.description}</p>
          <i className="fas fa-trash mx-2"></i>
          <i className="fas fa-edit mx-2"></i>
        </div>
      </div>
      })}
    </div>
  )
}

export default Home
