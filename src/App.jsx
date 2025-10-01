import React from 'react'
import { Routes, Route } from "react-router-dom";
import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import Services from './components/Services'
import Footer from './components/Footer'
import Contact from './components/Contact';
import Preloader from './components/Preloader';
import ScrollToTop from './components/ScrollToTop';

function App() {
  return (
    <>
    <Preloader/>
      <Header />
      <Routes>
        <Route path="/" element={<Hero/>} />
        <Route path="/about" element={<About />} /> 
        <Route path="/services" element={<Services />} /> 
        <Route path="/contact" element={<Contact />} /> 
      </Routes>
      <ScrollToTop/>
      <Footer />
    </>
  );
}

export default App;
