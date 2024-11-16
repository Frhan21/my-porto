"use-client";
import Image from "next/image";
import { faEye } from "@fortawesome/free-regular-svg-icons";
import { faCode } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";

const Card = ({ data }) => {
  return (
    <>
      <div className="grid grid-cols-2 gap-6 my-[5rem] lg:grid-cols-3 sm:gap-10" data-aos="fade-up">
        {data.map((item, index) => (
          <div
            key={index}
            className="relative bg-white w-[200px] h-[200px] sm:w-[250px] sm:h-[250px] md:w-[300px] md:h-[300px] mx-auto rounded-2xl overflow-hidden group"
          >
            {/* Gambar */}
            <Image
              src="https://plus.unsplash.com/premium_photo-1678565869434-c81195861939?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              width={500}
              height={500}
              className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-110"
              alt="Rounded Image"
            />

            {/* Overlay hitam transparan */}
            <div className="absolute inset-0 flex flex-col items-center justify-center transition-opacity duration-300 opacity-0 bg-black/60 group-hover:opacity-100">
              <h2 className="text-sm font-bold text-white sm:text-lg">
                {item.title}
              </h2>
              <span className="text-xs text-white sm:text-sm">
                {item.description}
              </span>

              {/* Icon Kode dan View */}
              <div className="absolute text-white bg-[#021526] px-2 py-1 sm:px-3 sm:py-2 bottom-2 left-2 rounded-md">
                {item.githubLink && (
                  <Link href={item.githubLink} target="_blank">
                    <FontAwesomeIcon icon={faCode} />
                  </Link>
                )}
              </div>
              <div className="absolute text-white bg-[#021526] px-2 py-1 sm:px-3 sm:py-2 bottom-2 right-2 rounded-md">
                <Link href={item.liveLink} target="_blank">
                  <FontAwesomeIcon icon={faEye} />
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Card;
