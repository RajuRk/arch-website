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
import Awards from './pages/Awards';
import Events from './pages/Events';
import Register from './pages/Register';
import Contact from './pages/Contact';

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
        <Route path="/register" element={<Register/>}/>
        <Route path="/awards" element={<Awards/>}/>
        <Route path="/contact" element={<Contact/>}/>
      </Routes>
      <Footer/>
    </>
  );
}

export default App;
