import React from 'react';
import './App.css';

import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import DetailMap from './components/DetailMap';
import Home from './components/Home';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route exact path='/maps' element={<DetailMap />} />
        </Routes>
        <Footer />
      </Router>


    </div>
  );
}

export default App;