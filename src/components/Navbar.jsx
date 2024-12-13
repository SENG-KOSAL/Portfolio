import React, { useState } from "react";
import { NavHashLink as NavLink } from 'react-router-hash-link';
const Navbar = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="bg-white  ">
      <div className="container mx-auto flex items-center justify-between px-4 py-4">
        {/* Logo */}
        <a href="/" className="text-xl font-bold text-gray-800 hover:text-gray-600">
          SENG KOSAL
        </a>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-6 text-gray-600 mx-auto">
          <li className="hover:text-gray-800">
          <NavLink smooth to="/#home">Home</NavLink>
          </li>
          <li className="hover:text-gray-800">
          <NavLink smooth to="/#about">About</NavLink>
          </li>
          <li className="hover:text-gray-800">
          <NavLink smooth to="/#services">Project</NavLink>
          </li>
          
          <li className="hover:text-gray-800">
          <NavLink to="/#contact">Contact</NavLink>
          </li>
        </ul>

        {/* Mobile Menu Icon */}
        <div className="md:hidden" onClick={toggleMobileMenu}>
          <i className={`${isMobileMenuOpen ? "fas fa-times" : "fas fa-bars"} text-xl text-gray-800`}></i>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <ul className="md:hidden bg-white shadow-md">
          <li className="border-b border-gray-200">
            <a href="/" className="block px-4 py-2 text-gray-600 hover:bg-gray-100">Home</a>
          </li>
          <li className="border-b border-gray-200">
            <a href="/about" className="block px-4 py-2 text-gray-600 hover:bg-gray-100">About</a>
          </li>
          <li className="border-b border-gray-200">
            <a href="/services" className="block px-4 py-2 text-gray-600 hover:bg-gray-100">Project</a>
          </li>
    
          <li className="border-b border-gray-200">
            <a href="/contact" className="block px-4 py-2 text-gray-600 hover:bg-gray-100">Contact</a>
          </li>
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
