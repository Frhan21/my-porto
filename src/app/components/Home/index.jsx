"use client";

import Image from "next/image";
import {
  faCss3Alt,
  faFacebook,
  faFigma,
  faGithub,
  faHtml5,
  faInstagram,
  faJs,
  faLaravel,
  faLinkedin,
  faPython,
  faReact,
} from "@fortawesome/free-brands-svg-icons";
import IconList from "../IconList";
import SocialLinks from "../SosialLinks";

const Home = () => {
  const icons = [
    { icon: faHtml5, hoverColor: "text-orange-500" },
    { icon: faCss3Alt, hoverColor: "text-blue-500" },
    { icon: faPython, hoverColor: "text-yellow-400" },
    { icon: faFigma, hoverColor: "text-red-400" },
    { icon: faJs, hoverColor: "text-yellow-400" },
    { icon: faReact, hoverColor: "text-blue-300" },
    { icon: faLaravel, hoverColor: "text-red-400" },
  ];

  const socialMediaLinks = [
    {
      url: "https://www.instagram.com/",
      icon: faInstagram,
      hoverColor: "text-pink-800",
    },
    {
      url: "https://www.facebook.com/",
      icon: faFacebook,
      hoverColor: "text-blue-900",
    },
    {
      url: "https://www.linkedin.com/in/m-farhan-ramadhan-9b083b266/",
      icon: faLinkedin,
      hoverColor: "text-blue-400",
    },
    {
      url: "https://github.com/Frhan21",
      icon: faGithub,
      hoverColor: "text-gray-500",
    },
  ];

  return (
    <div
      className="flex items-center justify-center w-full h-screen px-5 sm:px-24"
      id="home"
    >
      <div className="flex flex-col items-center justify-center w-full md:flex-row">
        <div
          className="w-full md:w-1/3 flex justify-center items-center ml-0 md:ml-[2rem] mt-[20rem] md:mt-0 relative"
          data-aos="fade-right"
        >
          <Image
            src="/img/Group 8.png"
            width={1000}
            height={2000}
            alt="Farhan Image"
            className="w-full h-auto max-w-2xl"
          />
          <div className="absolute top-9 md:top-6 right-9 md:right-0">
            <SocialLinks links={socialMediaLinks} />
          </div>
        </div>
        <div
          className="text-center md:text-left flex flex-col justify-center md:gap-5 gap-1 mt-10 md:mt-0 md:ml-10 lg:ml-[10rem]"
          data-aos="fade-left"
        >
          <h1 className="text-3xl font-semibold text-white md:text-6xl font-jetbrains">
            Hello...
          </h1>
          <h1 className="text-[#e2e2b6] text-3xl md:text-6xl font-extrabold">
            It’s me, Farhan
          </h1>
          <p className="max-w-lg text-4xl text-white md:text-lg">
            I' m a{" "}
            <span className="bg-[#e2e2b6] text-blue-900 p-2 rounded-xl font-bold font-jetbrains">
              fullstack developer
            </span>{" "}
            also with{" "}
            <span className="bg-[#e2e2b6] text-blue-900 p-2 rounded-xl font-bold font-jetbrains">
              graphic design
            </span>{" "}
            skills.
          </p>
          <div>
            <IconList icons={icons} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
