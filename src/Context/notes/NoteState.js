// import react from 'react';
import NoteContext  from './NoteContext';   
import { useState } from 'react';
const NoteState=(props)=>{
    const host="http://localhost:5000";
    const notesIntial=[];
      //GET ALL NOTES
      const getAllNotes= async ()=>{
        //API call
        
        const response = await fetch(`${host}/api/notes/fetchallnotes`, {
          method: 'GET', 
          headers: {
            'Content-Type': 'application/json',
            "auth-token":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjM0ZDVhM2FiZDg4NjdkMGZmOTgzNmM4In0sImlhdCI6MTY2NjIwMjg0OX0.CrQT-B-SIbOjhKXSPUZgFJAwAg8OX37TqPgtI8v-m7g"
          }
        });
        const j= await response.json();
        console.log(j)
          setNotes(j);


      }
      const[notes,setNotes]=useState(notesIntial);
      console.log("adding a note")
      //Add a note
      const addNote= async (title,description,tag)=>{
        //API call
        //API call
        
        const response = await fetch(`${host}/api/notes/addnote`, {
          method: 'POST', 
          headers: {
            'Content-Type': 'application/json',
            'auth-token':'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjM0ZDVhM2FiZDg4NjdkMGZmOTgzNmM4In0sImlhdCI6MTY2NjIwMjg0OX0.CrQT-B-SIbOjhKXSPUZgFJAwAg8OX37TqPgtI8v-m7g'
          }, body: JSON.stringify({title,description,tag}) 
        });
        const json= response.json();


        const note={"_id": "6350dadb1934e8cf7950838e3",
        "user": "634d5a3abd8867d0ff9836c8",
        "title":title,
        "description": description,   
        "tag": tag,
        "date": "2022-10-20T05:21:31.193Z",
        "__v": 0}
        setNotes(notes.concat(note));

      }


      //delete a note
      const deleteNote=(id)=>{
        const newNotes=notes.filter((note)=>{
          return note._id!==id; //stores only those notes who have diffrent id than give id
        })
        setNotes(newNotes);
      }

      //edit a note

      const editNote=async(id,title,description,tag)=>{
        console.log("edit ")
        //API call
        
        const response = await fetch(`${host}/api/notes/updatenote/${id}`, {
          method: 'PUT', 
          headers: {
            'Content-Type': 'application/json',
            'auth-token':'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjM0ZDVhM2FiZDg4NjdkMGZmOTgzNmM4In0sImlhdCI6MTY2NjIwMjg0OX0.CrQT-B-SIbOjhKXSPUZgFJAwAg8OX37TqPgtI8v-m7g'
          }, body: JSON.stringify({title,description,tag}) 
        });
        const json= response.json();
      
        //logic to edit in client 
        for (let index = 0; index < notes.length; index++) {
          const element = notes[index];
          if(index._id===id){
              element.title=title;
              element.description=description;
              element.tag=tag;
          }
          
        }
      }
    // const s1={
    //     name:"pranjal",
    //     class:"12th"
    // }
    // const [state,setState]=useState(s1);
    // const update=()=>{
    //     setTimeout(()=>{
    //         setState({
    //             name:"harry",
    //             class:"Btech"
    //         })
    //     },10000)
    // }
    return (
        // <NoteContext.Provider value={{state,update}}>
        <NoteContext.Provider value={{notes,addNote,deleteNote,editNote,getAllNotes}}>
            {props.children}
        </NoteContext.Provider>
    );
}

export default NoteState;