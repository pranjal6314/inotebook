
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


function App() {
  return (
    <>
    <NoteState>

    <Router>
      <Navbar/>
      <Alert message="hulu luuuu"/>
      <div className="container">
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/About" element={<About />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/Signup" element={<Signup />} />
      </Routes>
      </div>
    </Router>
    </NoteState>
    </>
    
  );
}

export default App;
