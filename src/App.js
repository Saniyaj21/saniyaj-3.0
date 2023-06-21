import './App.css';
import { useState } from 'react';

import data from './data.json';
import Projects from './pages/Projects';
import Navbar from './components/Navbar';

function App() {




  return (
    <div className="App">
      <Navbar />
      Deploy successfull



      <Projects data={data} />

    </div >
  );
}

export default App;
