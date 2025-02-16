import './App.css';
import About from './components/About';
import Footer from './components/Footer';
import Home from './components/Home';
import Navbar from './components/Navbar';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

function App() {
  return (
    <>
    <Router>
    <div className="App">
     <Navbar/>
     <Routes>
     <Route index element={<Home />} />
      <Route exact path ="/about" element={<About/>}/>
     
     </Routes>
     <Footer/>
    </div>
    </Router>
    </>
  );
}

export default App;
