import './App.css';
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";


// style


import data from './data.json';
import Projects from './pages/Projects';
import Navbar from './components/Navbar.jsx';
import Home from './pages/Home';
import About from './pages/About';

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
        {/* <Route path='*' element={<ErrorPage />} /> */}
      </Routes>
    </Router>
  );
}

export default App;
