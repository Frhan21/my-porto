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
    <div className="flex items-center justify-center w-full h-screen px-5 sm:px-24" id="home">
      <div className="flex flex-col items-center justify-center w-full md:flex-row">
        <div className="w-full md:w-1/3 flex justify-center items-center ml-0 md:ml-[2rem] mt-[20rem] md:mt-0 relative" data-aos="fade-right">
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
                  className="text-4xl transition-all duration-300 ease-in-out cursor-pointer md:text-5xl hover:text-pink-800"
                />
              </Link>
              <Link href="https://www.facebook.com/" target="_blank">
                <FontAwesomeIcon
                  icon={faFacebook}
                  className="text-4xl transition-all duration-300 ease-in-out cursor-pointer md:text-5xl hover:text-blue-900"
                />
              </Link>
              <Link href="https://www.linkedin.com/" target="_blank">
                <FontAwesomeIcon
                  icon={faLinkedin}
                  className="text-4xl transition-all duration-300 ease-in-out cursor-pointer md:text-5xl hover:text-blue-400"
                />
              </Link>
              <Link href="https://github.com/" target="_blank">
              <FontAwesomeIcon
                icon={faGithub}
                className="text-4xl transition-all duration-300 ease-in-out cursor-pointer md:text-5xl hover:text-gray-500"
              />
              </Link>
            </div>
          </div>
        </div>
        <div className="text-center md:text-left flex flex-col justify-center md:gap-5 gap-1 mt-10 md:mt-0 md:ml-10 lg:ml-[10rem]" data-aos="fade-left">
          <h1 className="text-[#e2e2b6] text-3xl md:text-6xl font-extrabold">
            Hello,
          </h1>
          <h1 className="text-[#e2e2b6] text-3xl md:text-6xl font-extrabold">
            It’s me, Farhan
          </h1>
          <p className="max-w-lg text-base text-white md:text-lg">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa
            mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien
            fringilla, mattis ligula consectetur.
          </p>
          <div className="flex justify-center gap-6 md:mt-5 mt-7 md:justify-start">
            <FontAwesomeIcon
              icon={faHtml5}
              className="text-5xl transition-all duration-300 ease-in-out cursor-pointer md:text-6xl text-white/25 hover:text-orange-500"
            />
            <FontAwesomeIcon
              icon={faCss3Alt}
              className="text-5xl transition-all duration-300 ease-in-out cursor-pointer md:text-6xl text-white/25 hover:text-blue-500"
            />
            <FontAwesomeIcon
              icon={faPython}
              className="text-5xl transition-all duration-300 ease-in-out cursor-pointer md:text-6xl text-white/25 hover:text-yellow-400"
            />
            <FontAwesomeIcon
              icon={faFigma}
              className="text-5xl transition-all duration-300 ease-in-out cursor-pointer md:text-6xl text-white/25 hover:text-red-400"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
