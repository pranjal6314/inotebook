import React,{useContext} from 'react'

import noteContext from '../Context/notes/NoteContext';
const NoteItem = (props) => {
  const context=useContext(noteContext);
  const {deleteNote,editNote}=context;
  return (
//       <div className="col-md-3">
//   <div className="card-body card my-3 border rounded p-3">
//     <h5 className="card-title text-xl font-semibold">{props.note.title}</h5>
//     <p className="card-text text-gray-700">{props.note.description}</p>
//     <div className="flex items-center">
//       <i
//         className="fas fa-trash cursor-pointer text-red-500 hover:text-red-700 mx-2"
//         onClick={() => {
//           deleteNote(props.note._id);
//           props.showAlert("Deleted Successfully", "success");
//         }}
//       ></i>
//       <i
//         className="fas fa-edit cursor-pointer text-blue-500 hover:text-blue-700 mx-2"
//         onClick={() => {
//           props.updatenote(props.note);
//         }}
//       ></i>
//     </div>
//   </div>
// </div>

<div className="">
<div className="bg-white border rounded p-4">
    <h5 className="text-xl font-semibold">{props.note.title}</h5>
    <p className="text-gray-700">{props.note.description}</p>
    <div className="flex items-center mt-4">
      <i
        className="fas fa-trash cursor-pointer text-red-500 hover:text-red-700 mx-2"
        onClick={() => {
          deleteNote(props.note._id);
          props.showAlert("Deleted Successfully", "success");
        }}
      ></i>
      <i
        className="fas fa-edit cursor-pointer text-blue-500 hover:text-blue-700 mx-2"
        onClick={() => {
          props.updatenote(props.note);
        }}
      ></i>
    </div>
  </div>
</div>


  )
}

export default NoteItem
