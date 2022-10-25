
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
function App() {
  return (
    <>
    <NoteState>

    <Router>
      <Navbar/>
      <div className="container">
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/About" element={<About />} />
      </Routes>
      </div>
    </Router>
    </NoteState>
    </>
    
  );
}

export default App;
