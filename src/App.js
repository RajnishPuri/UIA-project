import React from 'react';
import './App.css';

import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route, useParams } from 'react-router-dom'
import DetailMap from './components/DetailMap';
import Home from './components/Home';
import Footer from './components/Footer';
import Login from './components/Login';
import FullMap from './components/FullMap';

function App() {
  // const { id: uId } = useParams()
  // console.log("here", uId);
  const st1 = 'mapbox://styles/spartanraj/clam4hyns006v15qm9t69yi4q'
  const st2 = 'mapbox://styles/spartanraj/clanawm5k001414mmayh06an7'
  const st3 = 'mapbox://styles/spartanraj/clanakvk8001314phd67uxfc5'
  const st4 = 'mapbox://styles/spartanraj/clanakvk8001314phd67uxfc5'

  const des1 = ' We have created a fictional band website. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat'
  const des2 = ' We have created a fictional band website. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat'
  const des3 = ' We have created a fictional band website. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat'
  const des4 = ' We have created a fictional band website. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat'
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route exact path='/maps/1' element={<DetailMap id={1} st1={st1} con1='AQUIFERS' des1={des1} />} />
          <Route exact path='/maps/2' element={<DetailMap id={2} st2={st2} con2='RECHARGE CHARECTERISTICS' des2={des2} />} />
          <Route exact path='/maps/3' element={<DetailMap id={3} st3={st3} con3='RAINFALL' des3={des3} />} />
          <Route exact path='/maps/4' element={<DetailMap id={4} st4={st4} con4='WELLS' des4={des4} />} />
          <Route exact path='/login' element={<Login />} />
          <Route exact path='/fullmap' element={<FullMap />} />
        </Routes>
        <Footer />
      </Router>


    </div>
  );
}

export default App;
