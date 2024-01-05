import React,{useState} from 'react'
import {useNavigate } from  "react-router-dom";
// import './signup.css'               
const Signup = (props) => {
  const [credentials,setCredentials]=useState({name:"",email:"",password:"",Cpassword:""});
  const history = useNavigate()
  const handleSubmit= async(e)=>{
    e.preventDefault();
    const {name,email,password}=credentials;
    const response = await fetch(`http://localhost:5000/api/auth/CreateUser/`, {
      method: 'POST', 
      headers: {
        'Content-Type': 'application/json',
       
      },body:JSON.stringify({name,email,password})
    });
    const json= await response.json();
    console.log(json);
    if(json.success){
      //save the auth token and redirect
      localStorage.setItem('token',json.authtoken);
      //for redirecting we use usehistory hook
      history("/");
      props.showAlert("Account Created Successfully ","success");
    }else{
      props.showAlert(json.error,"danger");
    }


  }
  
  const onchange=(e)=>{
    setCredentials({...credentials,[e.target.name]:e.target.value});
}
  return (
//     <div className='mt-2'>
//     <h2>SignUp to continue to Inotebook</h2>
//       <form onSubmit={handleSubmit}>
  
//   <div className="mb-3">
//     <label htmlFor="name" className="form-label">Name</label>
//     <input type="text" className="form-control" id="name" onChange={onchange} value={credentials.name} name='name'/>
//   </div>
//   <div className="mb-3">  
//     <label htmlFor="email" className="form-label">Email Address</label>
//     <input type="email" className="form-control" id="email" onChange={onchange} value={credentials.email} name='email'/>
//   </div>
//   <div className="mb-3">
//     <label htmlFor="password" className="form-label">Password</label>
//     <input type="password" className="form-control" value={credentials.password} onChange={onchange} minLength={5} required id="password" name='password'/>
//   </div>
//   <div className="mb-3">
//     <label htmlFor="Cpassword" className="form-label">Confirm Password</label>
//     <input type="password" className="form-control" value={credentials.Cpassword} onChange={onchange}minLength={5} required id="Cpassword" name='Cpassword'/>
//   </div>
  
//   <button type="submit" className="btn btn-primary" >Submit</button>
// </form>

//     </div>

<div className='mt-2 flex justify-center items-center flex-col'>
  <h2 className='text-center text-2xl font-bold'>SignUp to continue to Inotebook</h2>
  <form onSubmit={handleSubmit} className='mt-4 w-full max-w-md'>
    <div className='mb-4'>
      <label htmlFor='name' className='block text-sm font-bold text-black'>
        Name
      </label>
      <input
        type='text'
        className='form-input mt-1 block w-full border-2 border-gray-300 rounded-md p-2 focus:outline-none focus:ring focus:border-blue-300'
        id='name'
        onChange={onchange}
        value={credentials.name}
        name='name'
      />
    </div>
    <div className='mb-4'>
      <label htmlFor='email' className='block text-sm font-bold text-black'>
        Email Address
      </label>
      <input
        type='email'
        className='form-input mt-1 block w-full border-2 border-gray-300 rounded-md p-2 focus:outline-none focus:ring focus:border-blue-300'
        id='email'
        onChange={onchange}
        value={credentials.email}
        name='email'
      />
    </div>
    <div className='mb-4'>
      <label htmlFor='password' className='block text-sm font-bold text-black'>
        Password
      </label>
      <input
        type='password'
        className='form-input mt-1 block w-full border-2 border-gray-300 rounded-md p-2 focus:outline-none focus:ring focus:border-blue-300'
        value={credentials.password}
        onChange={onchange}
        minLength={5}
        required
        id='password'
        name='password'
      />
    </div>
    <div className='mb-4'>
      <label htmlFor='Cpassword' className='block text-sm font-bold text-black'>
        Confirm Password
      </label>
      <input
        type='password'
        className='form-input mt-1 block w-full border-2 border-gray-300 rounded-md p-2 focus:outline-none focus:ring focus:border-blue-300'
        value={credentials.Cpassword}
        onChange={onchange}
        minLength={5}
        required
        id='Cpassword'
        name='Cpassword'
      />
    </div>

    <div className='flex items-center justify-center'>
      <button
        type='submit'
        className='btn bg-blue-500 text-white hover:bg-blue-700 font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline-blue active:bg-blue-800'
      >
        SignUp
      </button>
    </div>
  </form>
</div>

  )
}

export default Signup
