import './App.css';
import '../src/styles/common.scss'
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";

import Navbar from './components/Navbar.jsx';
import Home from './pages/Home';
import About from './pages/About';
import Qualification from './pages/Qualification';
import Skills from './pages/Skills';
import Projects from './pages/Projects';
import Contact from './pages/Contact';


function App() {

  return (
    // <div className="App">
    //   <Navbar />


    // </div >
    <Router>
      <Navbar />

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/qualification' element={<Qualification />} />
        <Route path='/skills' element={<Skills />} />
        <Route path='/projects' element={<Projects />} />
        <Route path='/contact' element={<Contact />} />
        {/* <Route path='*' element={<ErrorPage />} /> */}
      </Routes>
    </Router>
  );
}

export default App;
