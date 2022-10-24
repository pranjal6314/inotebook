import React from 'react'
import { useContext ,useEffect} from 'react';
import noteContext from "../Context/notes/noteContext";


const About=()=> {
  const context=useContext(noteContext);
  useEffect(() => {
    context.update();
    // eslint-disable-next-line
  },[])
  return (
    <div>
      This is an about page! {context.state.name} and he is in {context.state.class} class
    </div>
  )
}


export default About


