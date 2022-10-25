// import react from 'react';
import NoteContext  from './NoteContext';   
import { useState } from 'react';
const NoteState=(props)=>{
    const notesIntial=[
        {
          "_id": "6350dadb19348ce7950838c5",
          "user": "634d5a3abd8867d0ff9836c8",
          "title": "My First Note",
          "description": "React.js playlist with cwh bhai",
          "tag": "Placement",
          "date": "2022-10-20T05:21:31.193Z",
          "__v": 0
        },
        {
          "_id": "6350db6519348ce7950838c8",
          "user": "634d5a3abd8867d0ff9836c8",
          "title": "My First Note",
          "description": "React.js playlist with cwh bhai",
          "tag": "Placement",
          "date": "2022-10-20T05:23:49.786Z",
          "__v": 0
        },
        {
          "_id": "6350dbb719348ce7950838cb",
          "user": "634d5a3abd8867d0ff9836c8",
          "title": "everything is ok ",
          "description": "vedio number 52",
          "tag": "inotebook-note",
          "date": "2022-10-20T05:25:11.277Z",
          "__v": 0
        },
        {
          "_id": "635384d6213254ed0821d984",
          "user": "634d5a3abd8867d0ff9836c8",
          "title": "22/10/2022",
          "description": "vedio 53",
          "tag": "inotebook-note",
          "date": "2022-10-22T05:51:18.782Z",
          "__v": 0
        },
        {
          "_id": "63538d9d1a93acf8354e09b6",
          "user": "634d5a3abd8867d0ff9836c8",
          "title": "updated note",
          "description": "vedio 53 creating updated note functionality",
          "tag": "inotebook-note1",
          "date": "2022-10-22T06:28:45.870Z",
          "__v": 0
        },
        {
          "_id": "6354e684eb45fa6fed642c1c",
          "user": "634d5a3abd8867d0ff9836c8",
          "title": "22/10/2022",
          "description": "vedio 53",
          "tag": "inotebook-note",
          "date": "2022-10-23T07:00:20.111Z",
          "__v": 0
        }
      ]
      const[notes,setNotes]=useState(notesIntial);
      console.log("adding a note")
      //Add a note
      const addNote=(title,description,tag)=>{
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
          return note._id!==id;
        })
        setNotes(newNotes);
      }

      //edit a note

      const editNote=(id,title,description,tag)=>{

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
        <NoteContext.Provider value={{notes,addNote,deleteNote,editNote}}>
            {props.children}
        </NoteContext.Provider>
    );
}

export default NoteState;