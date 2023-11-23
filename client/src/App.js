import './App.css';
import React from 'react';
import About from './pages/About/About';
import { BrowserRouter, Routes, Route,Link } from "react-router-dom"
import Home from './pages/Home/Home';

function App(){
    return (
      <BrowserRouter>
        <header>
          <Link className="site-logo" to="/">#VanLife</Link>
          <nav>
            <Link to="/about">About</Link>
            <Link to="/vans">Vans</Link>
          </nav>
        </header>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </BrowserRouter>
    );
}

export default App;
