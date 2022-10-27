import React,{useEffect} from 'react'
import {Link, useLocation,useNavigate} from "react-router-dom";  
  
function Navbar() {
  const history=useNavigate();
  const handelLogout=()=>{
    localStorage.removeItem('token');
    history("/Login");
  }
  let location =useLocation(); //this hook is used to get the current location
  useEffect(()=>{
    console.log(location.pathname);
  },[location])
  return (
    
    <div>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
  <div className="container-fluid">
    <Link className="navbar-brand" to="/">InoteBook</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className={`nav-link ${location.pathname==="/"?"active":""} `} aria-current="page" to="/">Home</Link>
        </li>
        <li className="nav-item">
          <Link className={`nav-link ${location.pathname==="/About"?"active":""} `} to="/About">About</Link>
        </li>
        
        
      </ul>
      {!localStorage.getItem('token')?<form className="d-flex" >
        <Link to="/Login" className='btn btn-primary mx-2' role="button">Login</Link>
        <Link to="/Signup" className='btn btn-primary mx-2' role="button">Signup</Link>
        
      </form>:<button onClick={handelLogout} className='btn btn-primary'>Logout </button>}
    </div>
  </div>
</nav>
    </div>
  )
}

export default Navbar;
