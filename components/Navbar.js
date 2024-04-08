// import React from 'react'
import { IoSearchOutline } from "react-icons/io5";
 import { IoBagCheckSharp } from "react-icons/io5";
import dribbbleblack from "../assets/dribbleblack.jpg"

import ass4 from "../assets/ass4.avif"




import React, { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
   <div className="w-full"> <nav className=" bg-white shadow-sm md:shadow-xl w-screen lg:w-full ">
   <div className=" mx-auto">
     <div className="flex justify-between h-16 w-full">
       <div className="flex">
         <div className="flex-shrink-0 flex items-center">
           {/* Your logo or branding */}
           <img alt="photo" src={dribbbleblack} className=' h-16 w-32 ml-3 '></img>
         </div>
         {/* Navigation links for large screens */}
         <div className="hidden md:flex md:space-x-4">
            <a href="#" className="text-slate-600 lg:px-2  lg:py-5  py-2">Inspiration</a>
            <a href="#" className="text-slate-600 lg:px-2  lg:py-5  py-2">Find Work</a>
            <a href="#" className="text-slate-600 lg:px-2  lg:py-5  py-2">Go pro</a>
            <a href="#" className="text-slate-600 lg:px-2  lg:py-5  py-2 ">Learn Design</a>
            <a href="#" className="text-slate-600 lg:px-1 lg:py-5 py-2 ">Hire Designers</a>
           <div className='sm:hidden md:flex flex lg:pl-0  md:pl-0'>
<input type="text "className="hidden md:block  lg:display h-10 xl:w-48 xl:ml-20 lg:w-32 w-20 lg:ml-2 bg-slate-200 rounded-lg ml-2 mt-2.5 relative pl-5 text-xs  lg:text-xl"  placeholder="Search" ></input>
  <div className="sm:hidden"><IoSearchOutline className='sm:hidden md:block absolute -mt-7 ml-20 ' /></div>
   </div>
   <div className="lg:flex hidden  " >
     <IoBagCheckSharp className='h-7 w-7 mt-3 lg:ml-2'/>
</div> 
<div className=" md:flex sm:flex ">
 <img src={ass4} className=' h-8 w-8 mt-3   rounded-full'></img></div>

<button  className="sm:hidden rounded-md sm:appearance-none md:block text-white bg-pink-500  w-32 mt-3 ml-5 mb-3  ">Upload</button>

   


 
         
         </div>
       </div>
       {/* Hamburger menu for small screens */}
       <div className="flex md:hidden lg:hidden xl:hidden relative">
         <button onClick={toggleNavbar} className="text-white hover:text-gray-300 focus:outline-none focus:text-gray-300">
           <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
           </svg>
         </button>
       </div>
     </div>
   </div>
   {/* Responsive menu */}
   {isOpen && (
     <div className="flex flex-col md:flex sm:flex rel bg-white  ">
       <div className="px-1 pt-2 pb-3 space-y-1">
       <img alt="photo" src={ass4} className='  sm:flex md:flex h-8 w-8 ml-3  rounded-full '></img></div>
         <a href="#" className="text-slate-600 hover:bg-gray-700 block px-3 py-2 rounded-md">Inspiration</a>
         <a href="#" className="text-slate-600 hover:bg-gray-700 block px-3 py-2 rounded-md">Find Work</a>
         <a href="#" className="text-slate-600 hover:bg-gray-700 block px-3 py-2 rounded-md">Go pro</a>
         <a href="#" className="text-slate-600 hover:bg-gray-700 block px-3 py-2 rounded-md">Learn Design</a>
         <a href="#" className="text-slate-600 hover:bg-gray-700 block px-3 py-2 rounded-md">Hire Designers</a>

         <button  className="rounded-md sm:appearance-none md:block text-white bg-pink-500  w-32 mt-3 ml-2 p-2 mb-2  ">Upload</button>

       </div>
     
   )}
    <div>


  </div>

 </nav></div>

  );


};
export default Navbar;