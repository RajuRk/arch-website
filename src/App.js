import React, {useEffect} from 'react';
import {Routes, Route} from 'react-router-dom';
import Home from './pages/Home/Home';
import Header from './components/Header';
import Footer from './components/Footer';
import YouthHub from './pages/Events/YouthHub';
import SpaceDevelopment from './pages/Events/SpaceDevelopment';
import Sustainable from './pages/Events/SustainableHouse';
import Architecture from './pages/Events/ArchitecturalPhoto';
import Entrance from './pages/Events/RathinamEntrance';
import Photography from './pages/Events/Photography.js';
import Awards from './pages/Awards';
import Events from './pages/Events';
import Register from './pages/Register';
import Contact from './pages/Contact';
import Pay from './pages/Pay';
import InterSustain from './pages/Events/InterSustainable';

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
        <Route path="/event/youth-hub" element={<YouthHub/>}/>
        <Route path="/event/urban-space-redevelopment" element={<SpaceDevelopment/>}/>
        <Route path="/event/sustainable-housing" element={<Sustainable/>}/>
        <Route path="/event/architecture-photography" element={<Architecture/>}/>
        <Route path="/event/rathinam-entrance" element={<Entrance/>}/>
        <Route path="/event/photography" element={<Photography/>}/>
        <Route path="/event/inter-sustainable" element={<InterSustain/>}/>
        <Route path="/register" element={<Register/>}/>
        <Route path="/awards" element={<Awards/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/register-event" element={<Pay/>}/>
      </Routes>
      <Footer/>
    </>
  );
}

export default App;
