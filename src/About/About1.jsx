import React from "react";

const About1 = () => {
  return (
    <>
      <div className="bg-gray-100 min-h-screen flex flex-col items-center py-10">
        <h1 className="text-3xl font-bold mb-8">Explore My Experience</h1>
        <div className="flex flex-col md:flex-row gap-6">
          {/* Frontend Development Section */}
          <div className="bg-white shadow-lg rounded-lg p-6 w-80">
            <h2 className="text-xl font-semibold mb-4">Frontend Development</h2>
            <ul className="space-y-4">
              <li className="flex justify-between">
                <span className="font-medium">HTML</span>
                <span className="text-gray-500">Intermediate</span>
              </li>
              <li className="flex justify-between">
                <span className="font-medium">Tailwind</span>
                <span className="text-gray-500">Experienced</span>
              </li>
              
              <li className="flex justify-between">
                <span className="font-medium">React</span>
                <span className="text-gray-500">Experienced</span>
              </li>
              <li className="flex justify-between">
                <span className="font-medium">Vue</span>
                <span className="text-gray-500">Experienced</span>
              </li>
              
            </ul>
          </div>

          {/* Backend Development Section */}
          <div className="bg-white shadow-lg rounded-lg p-6 w-80">
            <h2 className="text-xl font-semibold mb-4">Backend Development</h2>
            <ul className="space-y-4">
              <li className="flex justify-between">
                <span className="font-medium">Mysql</span>
                <span className="text-gray-500">Basic</span>
              </li>
              <li className="flex justify-between">
                <span className="font-medium">Node JS</span>
                <span className="text-gray-500">Experienced</span>
              </li>
              <li className="flex justify-between">
                <span className="font-medium">Express JS</span>
                <span className="text-gray-500">Experienced</span>
              </li>
              
            </ul>
          </div>
          {/* Backend Development Section */}
          <div className="bg-white shadow-lg rounded-lg p-6 w-80">
            <h2 className="text-xl font-semibold mb-4">Other language</h2>
            <ul className="space-y-4">
              <li className="flex justify-between">
                <span className="font-medium">C</span>
                <span className="text-gray-500">Basic</span>
              </li>
              <li className="flex justify-between">
                <span className="font-medium">C++</span>
                <span className="text-gray-500">Experienced</span>
              </li>
              <li className="flex justify-between">
                <span className="font-medium">Java</span>
                <span className="text-gray-500">Experienced</span>
              </li>
              <li className="flex justify-between">
                <span className="font-medium">Python</span>
                <span className="text-gray-500">Experienced</span>
              </li>
              
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default About1;
