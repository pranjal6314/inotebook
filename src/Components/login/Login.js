import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
const Login = (props) => {
  const [credentials, setCredentials] = useState({ email: "", password: "" });
  
  const history = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch(`http://localhost:5000/api/auth/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: credentials.email,
        password: credentials.password,
      }),
    });
    const json = await response.json();
    console.log(json);
    if (json.success) {
      localStorage.setItem("token", json.authtoken);
      props.showAlert("Logged in Successfully ", "success");
      history("/");
    } else {
      props.showAlert("Invalid Credentials", "danger");
    }
  };
  const onchange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };
  return (
 
//     <div className="mt-2 flex justify-center items-center flex-col">
//   <h2 className="text-center text-2xl font-bold">Login to continue to Inotebook</h2>
//   <form onSubmit={handleSubmit} className="mt-4 w-full max-w-sm">
//     <div className="mb-3">
//       <label htmlFor="email" className="block text-sm font-bold text-black">
//         Email Address
//       </label>
//       <input
//         type="email"
//         className="form-input mt-1 block w-full border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-300"
//         id="email"
//         onChange={onchange}
//         value={credentials.email}
//         name="email"
//         placeholder="Enter your email"
//       />
//     </div>
//     <div className="mb-3">
//       <label htmlFor="password" className="block text-sm font-bold text-black">
//         Password
//       </label>
//       <input
//         type="password"
//         className="form-input mt-1 block w-full border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-300"
//         value={credentials.password}
//         onChange={onchange}
//         id="password"
//         name="password"
//         placeholder="Enter your password"
//       />
//     </div>

//     <button
//       type="submit"
//       className="btn bg-blue-500 text-white hover:bg-blue-700 font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline-blue active:bg-blue-800"
//     >
//       Submit
//     </button>
//   </form>
// </div>
<div className="mt-2 flex justify-center items-center flex-col">
  <h2 className="text-center text-2xl font-bold">Login to continue to Inotebook</h2>
  <form onSubmit={handleSubmit} className="mt-4 w-full max-w-md">
    <div className="mb-4">
      <label htmlFor="email" className="block text-sm font-bold text-black">
        Email Address
      </label>
      <input
        type="email"
        className="form-input mt-1 block w-full border-2 border-gray-300 rounded-md p-2 focus:outline-none focus:ring focus:border-blue-300"
        id="email"
        onChange={onchange}
        value={credentials.email}
        name="email"
        placeholder="Enter your email"
      />
    </div>
    <div className="mb-4">
      <label htmlFor="password" className="block text-sm font-bold text-black">
        Password
      </label>
      <input
        type="password"
        className="form-input mt-1 block w-full border-2 border-gray-300 rounded-md p-2 focus:outline-none focus:ring focus:border-blue-300"
        value={credentials.password}
        onChange={onchange}
        id="password"
        name="password"
        placeholder="Enter your password"
      />
    </div>

    <div className="flex items-center justify-center">
      <button
        type="submit"
        className="btn bg-blue-500 text-white hover:bg-blue-700 font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline-blue active:bg-blue-800"
      >
        Login
      </button>
    </div>
  </form>
</div>

    );
};

export default Login;
