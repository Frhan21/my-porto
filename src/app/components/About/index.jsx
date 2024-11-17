import Image from "next/image";
import Link from "next/link";

const About = () => {
  return (
    <div
      className="w-full h-auto flex flex-col md:flex-row justify-center items-center mt-[15rem] md:mt-10 px-5 sm:px-24 gap-7 md:gap-[5rem]"
      id="about"
    >
      {/* Text Section */}
      <div
        className="flex flex-col w-full gap-4 mt-10 md:gap-7 md:w-1/2 md:mt-0"
        data-aos="fade-right"
      >
        <div className="flex flex-col gap-2 text-center md:text-left">
          <span className="text-4xl text-white md:text-7xl font-jetbrains">
            Here's
          </span>
          <span className="text-4xl md:text-7xl font-extrabold text-[#e2e2b6]">
            About Me !!
          </span>
        </div>
        <p className="text-base text-center text-white md:text-justify md:text-xl font-jetbrains">
          I'm a physics graduate chasing my passion in developing and design.
          Over time, I've learned a lot and honed my skills in creating awesome
          apps and websites. I also have experience in building applications and
          websites that help others. Basically, I'm ready to create cool and
          useful stuff! 🚀
        </p>
        <Link
          href="/"
          className="px-4 py-2 bg-[#e2e2b6] w-[200px] font-bold rounded-full border-4 border-[#e2e2b6] hover:bg-[#021526] hover:text-[#e2e2b6] text-[1.1rem] text-center transition-all ease-in-out duration-300 mx-auto md:mx-0"
        >
          Download my CV
        </Link>
      </div>

      {/* Image Section */}
      <div className="flex justify-center w-full md:w-auto" data-aos="fade-up">
        <Image
          src="/img/Group 10.png"
          width={400}
          height={400}
          alt="About Image"
          className="max-w-xs md:max-w-lg"
        />
      </div>
    </div>
  );
};

export default About;
