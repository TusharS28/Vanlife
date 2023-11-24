import './App.css';
import React from 'react';
import { BrowserRouter, Routes, Route,Link } from "react-router-dom"
import "./server.js"
import About from './pages/About/About';
import Home from './pages/Home/Home';
import Vans from './pages/Vans/Vans';
import Vandetail from './pages/Vans/Vandetail.jsx';

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
          <Route path="/vans" element={<Vans/>} />
          <Route path='/vans/:id' element={<Vandetail/>} />
        </Routes>
      </BrowserRouter>
    );
}

export default App;
