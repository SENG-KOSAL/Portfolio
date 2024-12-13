import React from "react";
import { NavHashLink as NavLink } from 'react-router-hash-link';
const Home1 = () => {
  return (
    <>
      <div className="flex flex-col md:flex-row items-center justify-center min-h-screen ">
        <div className="flex flex-col items-start md:w-1/2 p-8 text-left">
          <h1 className="text-5xl font-bold text-">Hi, I'm Kosal</h1>
          <h2 className="text-2xl font-semibold text-gray-800 mt-2">
          Passionate Frontend Developer
          </h2>
          <p className="text-gray-600 mt-4 max-w-lg">
             This is my official Portfolio  website to show my all experience related to web development 
          </p>

          <div className="mt-5">
            
            <a href="Services">
              <NavLink smooth to="/#services" className="bg-transparent border border-green-600 text-black-600 py-2 px-4 rounded-lg hover:bg-green-600 hover:text-white">See Project</NavLink>
              
            </a>
          </div>

          <div className="flex items-center justify-start mt-5">
            <a href="https://www.linkedin.com/in/seng-kosal-3a5574281/" 
              className="text-gray-600 mx-3 hover:text-blue-600"
            >
              <i className="fab fa-linkedin"></i>
            </a>
            <a
              href="https://t.me/Jackkk_errr"
              className="text-gray-600 mx-3 hover:text-blue-600"
            >
              <i className="fab fa-telegram"></i>
            </a>
            <a
              href="https://github.com/SENG-KOSAL"
              className="text-gray-600 mx-3 hover:text-black-600"
            >
              <i className="fab fa-github"></i>
            </a>
          </div>
        </div>

        <div className="md:w-1/2 flex justify-center">
          <img
            src="/images/DSC_3jpg-removebg-preview.png"
            alt="Kosal"
            className="max-w-xs rounded-lg "
          />
        </div>
      </div>
    </>
  );
};

export default Home1;
