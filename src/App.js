
import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import Navbar from './Components/navbar';
import Home from './Components/home';
import About from './Components/about';
function App() {
  return (
    <>
    <Router>
      <Navbar/>
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/About" element={<About />} />
</Routes>
</Router>
    </>
    
  );
}

export default App;
