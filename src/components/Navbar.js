// Navbar.js
import React, { useState } from 'react';
import Button from './Button'; // Import the Button component

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-[#003366] p-4 shadow-lg fixed w-full top-0 left-0 z-10">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white text-3xl font-extrabold">
          <span className="text-yellow-500">Saylani</span> Welfare Trust
        </div>

        {/* Hamburger Icon for Mobile */}
        <div className="block lg:hidden">
          <button onClick={toggleMenu} className="text-white focus:outline-none">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="h-6 w-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>

        {/* Navbar Links */}
        <div className={`space-x-6 lg:flex ${isMenuOpen ? 'block' : 'hidden'} lg:block`}>
          <a href="/" className="text-white hover:text-yellow-500 transition-colors">Home</a>
          <a href="/about" className="text-white hover:text-yellow-500 transition-colors">About</a>
          <a href="/services" className="text-white hover:text-yellow-500 transition-colors">Services</a>
          <a href="/contact" className="text-white hover:text-yellow-500 transition-colors">Contact</a>
          {/* Replace Signup and Login links with Login Button */}
          <Button text="Login" color="bg-yellow-500" onClick={() => window.location.href = '/login'} />
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="lg:hidden bg-[#003366] p-4 text-white space-y-4">
          <a href="/" className="block hover:text-yellow-500 transition-colors">Home</a>
          <a href="/about" className="block hover:text-yellow-500 transition-colors">About</a>
          <a href="/services" className="block hover:text-yellow-500 transition-colors">Services</a>
          <a href="/contact" className="block hover:text-yellow-500 transition-colors">Contact</a>
          {/* Replace Signup and Login links with Login Button in mobile */}
          <Button text="Login" color="bg-yellow-500" onClick={() => window.location.href = '/login'} />
        </div>
      )}
    </nav>
  );
};

export default Navbar;
