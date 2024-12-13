// src/components/Projects.jsx

import React from 'react';
import { BiCategory } from 'react-icons/bi';

const projects = [
  {
    title: ' Inventory management ',
    description: 'I built a Java Inventory System to track stock, orders, and sales, enhancing my coding and data management skills.',
    imgSrc: 'https://cashflowinventory.com/blog/wp-content/uploads/2023/02/inventory-analysis.webp',
    githubLink: 'https://github.com/SENG-KOSAL/inventory-management-system.git',
    liveDemoLink: 'https://github.com/SENG-KOSAL/inventory-management-system.git',
  },
  {
    title: 'Selling product',
    description: 'I learned how to design, develop, and market a product while understanding what customers need , also helped me improve my problem-solving skills',
    imgSrc: 'https://www.finplus.co.in/wp-content/uploads/2017/05/Sell-products-online-why-should-I-start-selling-online.jpg',
    githubLink: 'https://github.com/SENG-KOSAL/Sell-product.git',
    liveDemoLink: 'https://sell-product-w36n.vercel.app/',
  },
  
];

const Projects = () => {
  return (
    <div className="flex flex-col items-center">
      <h1 className="text-3xl font-bold mb-8">Projects</h1>
      <div className="flex flex-wrap justify-center">
        {projects.map((project, index) => (
          <div key={index} className="m-4 p-6 bg-white rounded-lg shadow-md w-80">
            <img src={project.imgSrc} alt={project.title} className="rounded-t-lg mb-4" />
            <h2 className="text-xl font-semibold mb-2">{project.title}</h2>
            <p className="text-gray-600 mb-4">{project.description}</p>
            <div className="flex justify-between">
              <a href={project.githubLink} className="bg-gray-200 text-black py-2 px-4 rounded-lg">GitHub</a>
              <a href={project.liveDemoLink} className="bg-black text-white py-2 px-4 rounded-lg">Live Demo</a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;

// import React from 'react'

// const Services = () => {
//   const posts =[ 
//   {
//     id: 1,
//     title: 'Sell product',
//     href: 'https://sell-product-w36n.vercel.app/',
//     description:
//       'Working on the shoe product project was a great learning experience. I learned how to design, develop, and market a product while understanding what customers need. This project also helped me improve my problem-solving skills, especially in making the shoes comfortable and stylish.',
//     date: 'Using React.jsx',
//     datetime: '2020-03-16',
//     category: { title: 'Link', href: 'https://sell-product-w36n.vercel.app/' },
//     author: {
//       name: 'Sell product',
//       role: 'Any product in my database',
//       href: 'https://sell-product-w36n.vercel.app/',
//       imageUrl:
//         '/images/sneakers.png',
//     },
//   },
//   {
//     id: 2,
//     title: 'Inventory management system',
//     href: '',
//     description:
//       'I created an Inventory Management System using Java to help businesses track stock, orders, and sales. It includes features to add, update, and delete items and saves data using a database. I also made a simple interface with Java. This project taught me how to write clear code and manage data easily.',
//     date: 'Using java',
//     datetime: '2020-03-16',
//     category: { title: '', href: '' },
//     author: {
//       name: 'Inventory management system',
//       role: 'I can show you on my machine',
//       href: '#',
//       imageUrl:
//         'https://cdn-icons-png.flaticon.com/512/9805/9805578.png',
//     },
//   },
  
// ]
// const ProjectCard = ({ title, description, image, githubLink, liveDemoLink }) => (
//   <div className="bg-white rounded-lg shadow-md p-4">
//     <img src={image} alt={title} className="w-full h-40 object-cover rounded-md mb-4" />
//     <h3 className="text-lg font-semibold mb-2">{title}</h3>
//     <p className="text-gray-600 mb-4">{description}</p>
//     <div className="flex justify-between">
//       <a
//         href={githubLink}
//         className="bg-gray-800 text-white px-4 py-2 rounded hover:bg-gray-700"
//       >
//         GitHub
//       </a>
//       <a
//         href={liveDemoLink}
//         className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-500"
//       >
//         Live Demo
//       </a>
//     </div>
//   </div>
// );
// const Projects = () => (
//   <div className="bg-gray-100 min-h-screen p-10">
//     <h1 className="text-3xl font-bold text-center mb-10">Projects</h1>
//     <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//       {projects.map((project) => (
//         <ProjectCard key={project.id} {...project} />
//       ))}
//     </div>
//   </div>
// );
//   return (
//     <>
      
//       <div className="bg-white py-24 sm:py-32">
//       <div className="mx-auto max-w-7xl px-6 lg:px-8">
//         <div className="mx-auto max-w-2xl lg:mx-0">
//           <h2 className="text-pretty text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl">The project </h2>
//           {/* <p className="mt-2 text-lg/8 text-gray-600">Learn how to grow your business with our expert advice.</p> */}
//         </div>


//         <div className="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 border-t border-gray-200 pt-10 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3">
//           {posts.map((post) => (
//             <article key={post.id} className="flex max-w-xl flex-col items-start justify-between">
//               <div className="flex items-center gap-x-4 text-xs">
//                 <time dateTime={post.datetime} className="text-gray-500">
//                   {post.date}
//                 </time>
//                 <a
//                   href={post.category.href}
//                   className="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100"
//                 >
//                   {post.category.title}
//                 </a>
//               </div>
//               <div className="group relative">
//                 <h3 className="mt-3 text-lg/6 font-semibold text-gray-900 group-hover:text-gray-600">
//                   <a href={post.href}>
//                     <span className="absolute inset-0" />
//                     {post.title}
//                   </a>
//                 </h3>
//                 <p className="mt-5 line-clamp-3 text-sm/6 text-gray-600">{post.description}</p>
//               </div>
//               <div className="relative mt-8 flex items-center gap-x-4">
//                 <img alt="" src={post.author.imageUrl} className="size-10 rounded-full bg-gray-50" />
//                 <div className="text-sm/6">
//                   <p className="font-semibold text-gray-900">
//                     <a href={post.author.href}>
//                       <span className="absolute inset-0" />
//                       {post.author.name}
//                     </a>
//                   </p>
//                   <p className="text-gray-600">{post.author.role}</p>
//                 </div>
//               </div>
//             </article>
//           ))}
//         </div>




//       </div>



//     </div>
    
//     </>
//   )
// }

// export default Services