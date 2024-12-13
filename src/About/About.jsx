import React from 'react';
import About1 from './About1';
const About = () => {
  return (
    <>
      <div className="flex items-center justify-center h-screen">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">About Me</h1>
          <div className="flex flex-col sm:flex-row sm:justify-between">
            <p className="text-lg text-gray-600 text-left sm:w-1/2">
              I'm a front-end developer passionate about creating dynamic, user-friendly web experiences with HTML, CSS, JavaScript, React, and Vue. I also work with backend (MySQL) and am passionate about learning PHP and exploring backend technologies. I focus on delivering high-quality solutions.
            </p>



            <div className="text-lg text-gray-600 text-right sm:w-1/2 mt-4 sm:mt-0">
               <img src="https://kzudev.me/_next/static/media/header_mock2_dark.a1221d22.svg" alt="" />
            </div>

            
          </div>
        </div>
      </div>
      <About1/>
      <br />
    </>
  );
};

export default About;
