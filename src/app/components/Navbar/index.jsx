"use client";

import { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleScroll = (id) => {
    const targetElement = document.getElementById(id);
    if (targetElement) {
      const yOffset = -120; // Offset sesuai dengan tinggi navbar
      const y =
        targetElement.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
      setIsOpen(false); // Tutup menu setelah klik
    }
  };
  return (
    <div className="sticky top-0 z-50 flex items-center justify-between w-full px-5 py-4 text-white transition-all duration-300 border-b-2 backdrop-blur-lg bg-white/10 border-white/25 sm:px-20">
      <div className="flex flex-col items-center">
        <span className="text-xl font-bold">M Farhan Ramadhan</span>
        <span className="text-md ml-2 sm:ml-0 tracking-[4.5px] hidden sm:block">
          personal website
        </span>
      </div>
      <div className="sm:hidden">
        <button onClick={() => setIsOpen(!isOpen)} className="text-3xl">
          {isOpen ? "✖️" : "☰"}
        </button>
      </div>
      <div
        className={`flex-col sm:flex-row sm:gap-[2rem] sm:flex absolute sm:relative top-[4.2rem] -z-10 md:top-2 left-0 w-full sm:w-auto sm:pl-0 pl-5 pr-5 pb-3 bg-white/25 sm:bg-transparent rounded-b-[20px] transition-all duration-300 ease-in-out ${
          isOpen ? "flex" : "hidden"
        }`}
      >
        <a
          href="#home"
          onClick={() => handleScroll("home")}
          className="py-2 text-center transition-all duration-300 rounded-md cursor-pointer hover:text-blue-500 sm:px-4"
        >
          home
        </a>
        <a
          href="#about"
          onClick={() => handleScroll("about")}
          className="py-2 text-center transition-all duration-300 rounded-md cursor-pointer hover:text-blue-500 sm:px-4"
        >
          about
        </a>
        <a
          href="#portfolio"
          onClick={() => handleScroll("portfolio")}
          className="py-2 text-center transition-all duration-300 rounded-md cursor-pointer hover:text-blue-500 sm:px-4"
        >
          portfolio
        </a>
        <a
          href="#contact"
          onClick={() => handleScroll("contact")}
          className="py-2 text-center transition-all duration-300 rounded-md cursor-pointer hover:text-blue-500 sm:px-4"
        >
          contact
        </a>
      </div>
    </div>
  );
};

export default Navbar;
