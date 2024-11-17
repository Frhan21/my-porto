"use client";

import { useState, useRef, useEffect } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);
  const navbarRef = useRef(null);

  const handleScroll = (id) => {
    const targetElement = document.getElementById(id);
    if (targetElement && navbarRef.current) {
      const navbarHeight = navbarRef.current.offsetHeight; // Mengukur tinggi navbar
      const yOffset = -navbarHeight - 10; // Tambahkan margin kecil
      const y =
        targetElement.getBoundingClientRect().top +``
        window.pageYOffset +
        yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
      setIsOpen(false); // Menutup menu setelah klik
    }
  };

  useEffect(() => {
    const handleStickyNavbar = () => {
      if (window.scrollY > 0) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener("scroll", handleStickyNavbar);

    return () => {
      window.removeEventListener("scroll", handleStickyNavbar);
    };
  }, []);

  return (
    <div
      ref={navbarRef}
      className={`${
        isSticky ? "sticky top-0" : "relative"
      } z-50 flex items-center justify-between w-full px-3 py-2 text-white transition-all duration-300 border-b-2 rounded-b-[1rem] backdrop-blur-lg bg-white/10 border-white/25 sm:px-20`}
    >
      <div className="flex flex-col items-center">
        <span className="text-xl font-bold">M Farhan Ramadhan</span>
        <span className="text-sm ml-2 sm:ml-0 tracking-[4.5px] hidden sm:block">
          personal website
        </span>
      </div>
      <div className="sm:hidden">
        <button onClick={() => setIsOpen(!isOpen)} className="text-3xl">
          {isOpen ? "✖️" : "☰"}
        </button>
      </div>
      <div
        className={`flex-col sm:flex-row sm:gap-[2rem] sm:flex absolute sm:relative top-[4.2rem] -z-10 md:top-2 left-0 w-full sm:w-auto sm:pl-0 pl-3 pr-3 pb-3 bg-white/25 sm:bg-transparent rounded-b-[20px] transition-all duration-300 ease-in-out ${
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
