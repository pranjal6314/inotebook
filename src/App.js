
import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import About from './Components/About';
import NoteState from './Context/notes/NoteState';
import Alert from './Components/Alert';
import Login from './Components/login/Login';
import Signup from './Components/login/Signup' ;
import {useState} from 'react'; 

function App() {
  const [alert,setAlert]=useState(null);
  const showAlert=(message,type)=>{
    setAlert({
      msg:message,
      type:type
    })
    setTimeout(()=>{
      setAlert(null);
    },1500)
  }
  return (
    <>
    <NoteState>

    <Router>
      <Navbar/>
      <Alert alert={alert}/>
      <div className="container">
      <Routes>
          <Route path="/" element={<Home showAlert={showAlert}/>} />
          <Route path="/About" element={<About />} />
          <Route path="/Login" element={<Login showAlert={showAlert} />} />
          <Route path="/Signup" element={<Signup showAlert={showAlert}/>} />
      </Routes>
      </div>
    </Router>
    </NoteState>
    </>
    
  );
}

export default App;
