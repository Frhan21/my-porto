import Image from "next/image";
import Home from "./components/Home";
import About from "./components/About";
import Portofolio from "./components/Portofolio";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";

export default function Page() {
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
