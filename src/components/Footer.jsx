import React from "react";
import { NavHashLink as NavLink } from "react-router-hash-link";
const Footer = () => {
  return (
    <footer className="bg-gray-100 text-gray-700 py-6">
      <div className="container mx-auto text-center space-y-4">
        {/* Links */}
        <nav className="flex justify-center space-x-6">
          <NavLink smooth to="/#home" className="hover:text-black">
            Home
          </NavLink>
          <NavLink smooth to="/#about" className="hover:text-black">
            About
          </NavLink>
          <NavLink smooth to="/#services" className="hover:text-black">
            Project
          </NavLink>
          <NavLink to="/#contact" className="hover:text-black">Contact</NavLink>
        </nav>

        {/* Social Icons */}
        <div className="flex justify-center space-x-4">
          <a
            href="https://www.linkedin.com/in/seng-kosal-3a5574281/"
            className="text-gray-600  hover:text-blue-600"
          >
            <i className="fab fa-linkedin"></i>
          </a>
          <a
            href="https://t.me/Jackkk_errr"
            className="text-gray-600  hover:text-blue-500"
          >
            <i className="fab fa-telegram"></i>
          </a>
          <a
            href="https://github.com/SENG-KOSAL"
            aria-label="GitHub"
            className="hover:text-black"
          >
            <i className="fab fa-github"></i>
          </a>
          <a
            href="https://www.youtube.com/@Sengkosal-j8x"
            aria-label="YouTube"
            className="hover:text-[#FF0000]"
          >
            <i className="fab fa-youtube"></i>
          </a>
        </div>

        {/* Copyright */}
        <p className="text-sm">
          © 2024 Your Company, Inc. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
