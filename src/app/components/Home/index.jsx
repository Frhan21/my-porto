"use client";

import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCss3Alt,
  faFacebook,
  faFigma,
  faGithub,
  faHtml5,
  faInstagram,
  faLinkedin,
  faPython,
} from "@fortawesome/free-brands-svg-icons";
import Link from "next/link";

const Home = () => {
  return (
    <div className="w-full h-screen flex justify-center items-center px-5 sm:px-24">
      <div className="flex flex-col md:flex-row items-center justify-center w-full">
        <div className="w-full md:w-1/3 flex justify-center items-center ml-0 md:ml-[2rem] mt-[20rem] md:mt-0 relative">
          <Image
            src="/img/Group 8.png"
            width={1000}
            height={2000}
            alt="Farhan Image"
            className="w-full h-auto max-w-2xl"
          />
          <div className="absolute top-9 md:top-6 right-9 md:right-0">
            <div className="flex flex-col gap-4 text-gray-500/40">
              <Link href="https://www.instagram.com/" target="_blank">
                <FontAwesomeIcon
                  icon={faInstagram}
                  className="text-4xl md:text-5xl cursor-pointer 
              hover:text-pink-800 transition-all ease-in-out duration-300"
                />
              </Link>
              <Link href="https://www.facebook.com/" target="_blank">
                <FontAwesomeIcon
                  icon={faFacebook}
                  className="text-4xl md:text-5xl cursor-pointer hover:text-blue-900 transition-all ease-in-out duration-300"
                />
              </Link>
              <Link href="https://www.linkedin.com/" target="_blank">
                <FontAwesomeIcon
                  icon={faLinkedin}
                  className="text-4xl md:text-5xl cursor-pointer hover:text-blue-400 transition-all ease-in-out duration-300"
                />
              </Link>
              <Link href="https://github.com/" target="_blank">
              <FontAwesomeIcon
                icon={faGithub}
                className="text-4xl md:text-5xl cursor-pointer hover:text-gray-500 transition-all ease-in-out duration-300"
              />
              </Link>
            </div>
          </div>
        </div>
        <div className="text-center md:text-left flex flex-col justify-center md:gap-5 gap-1 mt-10 md:mt-0 md:ml-10 lg:ml-[10rem]">
          <h1 className="text-[#e2e2b6] text-3xl md:text-6xl font-extrabold">
            Hello,
          </h1>
          <h1 className="text-[#e2e2b6] text-3xl md:text-6xl font-extrabold">
            It’s me, Farhan
          </h1>
          <p className="text-white text-base md:text-lg max-w-lg">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa
            mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien
            fringilla, mattis ligula consectetur.
          </p>
          <div className="flex md:mt-5 mt-7 justify-center md:justify-start gap-6">
            <FontAwesomeIcon
              icon={faHtml5}
              className="md:text-6xl text-5xl text-white/25 hover:text-orange-500 cursor-pointer transition-all ease-in-out duration-300"
            />
            <FontAwesomeIcon
              icon={faCss3Alt}
              className="md:text-6xl text-5xl text-white/25 hover:text-blue-500 cursor-pointer transition-all ease-in-out duration-300"
            />
            <FontAwesomeIcon
              icon={faPython}
              className="md:text-6xl text-5xl text-white/25 hover:text-yellow-400 cursor-pointer transition-all ease-in-out duration-300"
            />
            <FontAwesomeIcon
              icon={faFigma}
              className="md:text-6xl text-5xl text-white/25 hover:text-red-400 cursor-pointer transition-all ease-in-out duration-300"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
