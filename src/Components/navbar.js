import React,{useEffect, useState} from 'react'
import {Link, useLocation,useNavigate} from "react-router-dom";  
  
function Navbar() {
  const history=useNavigate();
  
  const handelLogout=()=>{
    localStorage.removeItem('token');
    history("/Login");
  }
  let location =useLocation(); //this hook is used to get the current location
  const [activeLink, setActiveLink] = useState(location.pathname);
  // useEffect(()=>{
  //   console.log(location.pathname);
  // },[location])
  return (
    
    <div>
      
<nav className="border-gray-200 bg-gray-800 dark:bg-gray-800 dark:border-gray-700">
  <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-3">
    <Link to="/" className="flex items-center space-x-3 rtl:space-x-reverse">
      <img src="https://flowbite.com/docs/images/logo.svg" className="h-8" alt="Flowbite Logo" />
      <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">InoteBook</span>
    </Link>
   
    <div className="hidden w-full" id="navbar-hamburger">
      <ul className="flex flex-col font-medium mt-4 rounded-lg bg-gray-50 dark:bg-gray-800 dark:border-gray-700">
        <li>
          <Link to="/" className={`block py-2 px-3 text-white bg-blue-700 rounded dark:bg-blue-600 ${location.pathname === "/" ? "font-semibold" : ""}`} aria-current="page">Home</Link>
        </li>
        <li>
          <Link to="/About" className={`block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white ${location.pathname === "/About" ? "font-semibold" : ""}`}>About</Link>
        </li>
      </ul>
    </div>
    <div className="flex items-center">
      {!localStorage.getItem('token') ? (
       <div className="flex">
    

      
       <Link
  to="/Login"
  className={`btn mx-2 ${activeLink === "/Login" ? "btn-primary" : "text-blue-500"}`}
  role="button"
  onClick={() => setActiveLink("/Login")}
>
  {activeLink === "/Login" ? "Login" : <span className="hover:text-white font-semibold whitespace-nowrap dark:text-white">Login</span>}
</Link>
       <Link
  to="/Signup"
  className={`btn mx-2 ${activeLink === "/Signup" ? "btn-primary" : "text-blue-500"}`}
  role="button"
  onClick={() => setActiveLink("/Signup")}
>
  {activeLink === "/Signup" ? "Signup" : <span className="hover:text-white font-semibold whitespace-nowrap dark:text-white ">Signup</span>}
</Link>
     </div>
      ) : (
        <button onClick={handelLogout} className="btn btn-primary">Logout</button>
      )}
    </div>
  </div>
</nav>



    </div>
  )
}

export default Navbar;
  