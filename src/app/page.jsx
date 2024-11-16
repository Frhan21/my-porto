"use client";

import Image from "next/image";
import Home from "./components/Home";
import About from "./components/About";
import Portofolio from "./components/Portofolio";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react'


export default function Page() {
  useEffect(() => {
    AOS.init({
      easing: 'ease-out-back',
      duration: 1000,
      once: true,
    });
  },[])

  return (
    <>
      <Navbar />
      <Home />
      <About />
      <Portofolio />
      <Footer />
    </>
  );
}
