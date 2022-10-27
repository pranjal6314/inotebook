import React,{useState} from 'react'
import {useNavigate } from  "react-router-dom";
import './login.css'
const Login = (props) => {
  const [credentials,setCredentials]=useState({email:"",password:""});
  const history = useNavigate()
  const handleSubmit= async(e)=>{
    e.preventDefault();
    const response = await fetch(`http://localhost:5000/api/auth/login`, {
      method: 'POST', 
      headers: {
        'Content-Type': 'application/json',
       
      },body:JSON.stringify({email:credentials.email,password:credentials.password})
    });
    const json= await response.json();
    console.log(json);
    if(json.success){
      //save the auth token and redirect
      localStorage.setItem('token',json.authtoken);
      //for redirecting we use usehistory hook
      history("/");
      props.showAlert("Logged in Successfully ","success");
    }else{
      props.showAlert("Invalid Credentials","danger");
    }


  }
  const onchange=(e)=>{
    setCredentials({...credentials,[e.target.name]:e.target.value});
}
  return (
    
    <div>
      <form onSubmit={handleSubmit}>
  
  <div className="mb-3">
    <label htmlFor="email" className="form-label">Email Address</label>
    <input type="email" className="form-control" id="email" onChange={onchange} value={credentials.email} name='email'/>
  </div>
  <div className="mb-3">
    <label htmlFor="password" className="form-label">Password</label>
    <input type="password" className="form-control" value={credentials.password} onChange={onchange} id="password" name='password'/>
  </div>
  
  <button type="submit" className="btn btn-primary" >Submit</button>
</form>
    </div>
  )
}

export default Login
