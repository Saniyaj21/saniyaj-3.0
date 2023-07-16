import './App.css';
import '../src/styles/common.scss'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Navbar from './components/Navbar.jsx';
import Home from './pages/Home';


function App() {

  return (
    <Router>
      <Navbar />

      <Routes>
        <Route path='/' element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;
