import Image from "next/image";
import Link from "next/link";

const About = () => {
  return (
    <div className="w-full h-auto flex flex-col md:flex-row justify-center items-center mt-[17rem] md:mt-10 px-5 sm:px-24 gap-7 md:gap-[5rem]">
      {/* Text Section */}
      <div className="flex flex-col w-full md:w-1/2 gap-4 mt-10 md:mt-0">
        <div className="flex flex-col gap-2 text-center md:text-left">
          <span className="text-4xl md:text-7xl font-extrabold text-[#6eacda]">
            Here's
          </span>
          <span className="text-4xl md:text-7xl font-extrabold text-[#6eacda]">
            About Me !!
          </span>
        </div>
        <p className="text-base md:text-xl text-[#e2e2b6] text-justify font-semibold">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatum,
          modi accusantium suscipit excepturi ex quibusdam, dolorem vel aperiam
          asperiores provident ut veritatis mollitia magni perferendis? Nostrum
          rerum voluptatem praesentium totam? Cumque, eius vero expedita nam
          blanditiis nobis deserunt nihil placeat quod, excepturi ipsum,
          obcaecati culpa. Perspiciatis a eos placeat quae architecto ratione
          sapiente ad eligendi. Sed suscipit non necessitatibus mollitia!
        </p>
        <Link
          href="/"
          className="px-4 py-2 bg-[#e2e2b6] w-[200px] font-bold rounded-md border-4 border-[#e2e2b6] hover:bg-[#021526] hover:text-white text-[1.1rem] text-center transition-all ease-in-out duration-300 mx-auto md:mx-0"
        >
          Download my CV
        </Link>
      </div>

      {/* Image Section */}
      <div className="w-full md:w-auto flex justify-center">
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
