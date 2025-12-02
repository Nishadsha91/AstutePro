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
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsOfService from "./pages/TermsOfService";
import CookiesPolicy from "./pages/CookiesPolicy";
import BackToTop from './components/BackToTop';
import Accounting from './services/Accounting';
import Audit from './services/Audit';
import Busines from './services/busines';
import Corporate from './services/Corporate';
import Erp from './services/Erp';
import Esr from './services/Esr';
import Inventory from './services/Inventory';
import Mis from './services/Mis';
import Payroll from './services/Payroll';
import Vat from './services/Vat';
import Web from './services/Web';

function App() {
  return (
    <>
    <Preloader/>
      <Header />
      <ScrollToTop/>
      <Routes>
        <Route path="/" element={<Hero/>} />
        <Route path="/about" element={<About />} /> 
        <Route path="/services" element={<Services />} /> 
        <Route path="/contact" element={<Contact />} /> 

        <Route path="/accounting-service" element={<Accounting />} /> 
        <Route path="/auditing-service" element={<Audit />} /> 
        <Route path="/business-service" element={<Busines />} /> 
        <Route path="/corporate-service" element={<Corporate />} /> 
        <Route path="/erp-service" element={<Erp />} /> 
        <Route path="/esr-service" element={<Esr />} /> 
        <Route path="/inventory-service" element={<Inventory />} /> 
        <Route path="/mis-budget-service" element={<Mis />} /> 
        <Route path="/payroll-service" element={<Payroll />} /> 
        <Route path="/vat-service" element={<Vat />} /> 
        <Route path="/web-service" element={<Web />} /> 
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/terms-of-service" element={<TermsOfService />} />
        <Route path="/cookies" element={<CookiesPolicy />} />



      </Routes>
      <BackToTop/>
      <Footer />
    </>
  );
}

export default App;
