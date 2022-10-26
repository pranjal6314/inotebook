import React, { useEffect } from 'react'
import {useContext } from 'react';
import noteContext from '../Context/notes/NoteContext';
import Addnote from './Addnote';
import NoteItem  from './NoteItem';

function Notes() {
    const context=useContext(noteContext);
  const {notes,getAllNotes}=context;
  useEffect(() => {
    getAllNotes();
    // eslint-disable-next-line
  },[]);
  return (
    <>
    <Addnote/>
    <div className='row my-3'>
      <h2>Your Notes</h2>
      {notes.map((note)=>{
        return <NoteItem note={note}/>
         
      })}
    </div>
    </>
  )
}

export default Notes
