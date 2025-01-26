// AppRoutes.js
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from '../Pages/Home';
import About from '../Pages/About';
import Contact from '../Pages/Contact';
import Login from '../Pages/auth/login';
import Services from '../Pages/Services';
import Admin from '../Pages/auth/Dashboard Screens/Admin Dashoard/Admin';
import Registrationform from '../Pages/auth/Registrationform.js';
import Clientform from '../Pages/auth/Dashboard Screens/Receptionist dashboard/Clientform';
import Tokenpage from '../Pages/auth/Dashboard Screens/Receptionist dashboard/Tokenpage.js';

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/registrationform" element={<Registrationform />} />
        <Route path="/clientform" element={<Clientform />} />
        <Route path="/tokenpage" element={<Tokenpage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
