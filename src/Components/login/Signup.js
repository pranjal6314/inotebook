import React,{useState} from 'react'
import {useNavigate } from  "react-router-dom";
// import './signup.css'               
const Signup = () => {
  const [credentials,setCredentials]=useState({name:"",email:"",password:"",Cpassword:""});
  const history = useNavigate()
  const handleSubmit= async(e)=>{
    e.preventDefault();
    const {name,email,password,Cpassword}=credentials;
    const response = await fetch(`http://localhost:5000/api/auth/CreateUser/`, {
      method: 'POST', 
      headers: {
        'Content-Type': 'application/json',
       
      },body:JSON.stringify({name,email,password})
    });
    const json= await response.json();
    console.log(json);
    
      //save the auth token and redirect
      localStorage.setItem('token',json.authtoken);
      //for redirecting we use usehistory hook
      history("/");
    


  }
  const onchange=(e)=>{
    setCredentials({...credentials,[e.target.name]:e.target.value});
}
  return (
    <div>
      <form onSubmit={handleSubmit}>
  
  <div className="mb-3">
    <label htmlFor="name" className="form-label">Name</label>
    <input type="text" className="form-control" id="name" onChange={onchange} value={credentials.name} name='name'/>
  </div>
  <div className="mb-3">  
    <label htmlFor="email" className="form-label">Email Address</label>
    <input type="email" className="form-control" id="email" onChange={onchange} value={credentials.email} name='email'/>
  </div>
  <div className="mb-3">
    <label htmlFor="password" className="form-label">Password</label>
    <input type="password" className="form-control" value={credentials.password} onChange={onchange} minLength={5} required id="password" name='password'/>
  </div>
  <div className="mb-3">
    <label htmlFor="Cpassword" className="form-label">Confirm Password</label>
    <input type="password" className="form-control" value={credentials.Cpassword} onChange={onchange}minLength={5} required id="Cpassword" name='Cpassword'/>
  </div>
  
  <button type="submit" className="btn btn-primary" >Submit</button>
</form>

    </div>
  )
}

export default Signup
