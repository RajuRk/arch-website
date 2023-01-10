import React, {useEffect} from 'react';
import {Routes, Route} from 'react-router-dom';
import Home from './pages/Home/Home';
import Header from './components/Header';
import Footer from './components/Footer';
import FacadeDesign from './pages/Events/FacadeDesign';
import Pavilion from './pages/Events/Pavilion';
import Sustainable from './pages/Events/SustainableHouse';
import Architecture from './pages/Events/ArchitecturalPhoto';
import BusShelter from './pages/Events/BusShelter';
import Events from './pages/Events';
import Register from './pages/Register';

function App() {

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <>
      <Header/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/events" element={<Events/>}/>
        <Route path="/event/facade-design" element={<FacadeDesign/>}/>
        <Route path="/event/pavilion" element={<Pavilion/>}/>
        <Route path="/event/sustainable-housing" element={<Sustainable/>}/>
        <Route path="/event/architecture-photography" element={<Architecture/>}/>
        <Route path="/event/bus-shelter" element={<BusShelter/>}/>
        <Route path="/register" element={<Register/>}/>
      </Routes>
      <Footer/>
    </>
  );
}

export default App;
