import { faFacebook, faGithub, faInstagram, faLinkedin, faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";

const Footer = () => {
  return (
    <>
      <div className="w-full h-fit mt: md:mt-[8rem]" id="contact">
        <div className="flex flex-col gap-6 mx-7 md:mx-[5rem]">
          <div className="flex flex-col justify-start gap-1 md:gap-4">
            <span className="text-4xl md:text-6xl font-extrabold text-[#e2e2b6]">
              Interest for Work ?
            </span>
            <span className="text-2xl md:text-4xl font-light text-[#e2e2b6]">
              You can contact me from here ...
            </span>
          </div>
          <div className="flex gap-6">
            <Link
              href="/"
              className="bg-[#e2e2b6] border-2 border-[#e2e2b6] hover:bg-[#021526] hover:text-[#e2e2b6] px-4 py-2 rounded-md font-bold text-xl transition-all ease-in-out duration-300 hover:shadow-md hover:shadow-white/25"
            >
              <FontAwesomeIcon icon={faWhatsapp} /> Call me
            </Link>
            <Link
              href="/"
              className="bg-[#e2e2b6] border-2 border-[#e2e2b6] hover:bg-[#021526] hover:text-[#e2e2b6] px-4 py-2 rounded-md font-bold text-xl transition-all ease-in-out duration-300 hover:shadow-md hover:shadow-white/25"
            >
              <FontAwesomeIcon icon={faEnvelope} /> Email me
            </Link>
          </div>
        </div>
        <div className="w-full h-64 mt-[6rem] rounded-t-[25px] bg-[#e2e2b6]">
          <div className="flex flex-col items-center justify-center h-full gap-4">
            <div className="flex flex-col items-center justify-center text-center">
              <span className='text-2xl md:text-3xl font-extrabold text-[#021526]'>M Farhan Ramadhan</span>
              <span className="text-xl font-semibold text-[#021526]">Personal Website</span>
            </div>
            <div className="flex gap-10 text-4xl">
                <FontAwesomeIcon icon={faInstagram} />
                <FontAwesomeIcon icon={faFacebook} />
                <FontAwesomeIcon icon={faLinkedin} />
                <FontAwesomeIcon icon={faGithub} />
            </div>

            <div>
                Copyright &copy; All Rights Reserved.
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
