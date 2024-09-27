"use client"

import { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="w-full px-5 py-4 flex justify-between items-center backdrop-blur-2xl rounded-b-[20px] bg-white/5 text-white sm:px-20 border-b-2 border-white/25">
      <div className="flex flex-col items-center">
        <span className="text-xl font-bold">M Farhan Ramadhan</span>
        <span className="text-md ml-2 sm:ml-0 tracking-[4.5px] hidden sm:block">personal website</span>
      </div>
      <div className="sm:hidden">
        <button onClick={() => setIsOpen(!isOpen)} className="text-3xl">
          {isOpen ? '✖️' : '☰'}
        </button>
      </div>
      <div className={`flex-col sm:flex-row sm:gap-[2rem] sm:flex absolute sm:relative top-[4.2rem] -z-10 md:top-2 left-0 w-full sm:w-auto sm:pl-0 pl-5 pr-5 pb-3 bg-white/25 sm:bg-transparent rounded-b-[20px] transition-all duration-300 ease-in-out ${isOpen ? 'flex' : 'hidden'}`}>
        <div className="cursor-pointer hover:text-blue-500 py-2 sm:px-4 rounded-md transition-all duration-300 text-center">
          home
        </div>
        <div className="cursor-pointer hover:text-blue-500 py-2 sm:px-4 rounded-md transition-all duration-300 text-center">
          about
        </div>
        <div className="cursor-pointer hover:text-blue-500 py-2 sm:px-4 rounded-md transition-all duration-300 text-center">
          portfolio
        </div>
        <div className="cursor-pointer hover:text-blue-500 py-2 sm:px-4 rounded-md transition-all duration-300 text-center">
          contact
        </div>
      </div>
    </div>
  );
};

export default Navbar;
