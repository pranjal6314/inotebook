import React, { useContext } from 'react'
import Notes from "./Notes"
export const Home=(props)=> {
  
  return (
    
    <div className='container my-3'>
      <Notes showAlert={props.showAlert}/>
    </div>
  )
}

export default Home
