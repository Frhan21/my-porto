"use-client";
import Image from "next/image";
import { faEye } from "@fortawesome/free-regular-svg-icons";
import { faCode } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Card = ({ data }) => {
  return (
    <>
      <div className="grid grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-10 mx-auto mt-10">
        {data.map((item, index) => (
          <div
            className="relative bg-white w-[250px] h-[250px] md:w-[300px] md:h-[300px] rounded-2xl overflow-hidden group mx-auto"
            key={index}
          >
            {/* Gambar */}
            <Image
              src="https://plus.unsplash.com/premium_photo-1678565869434-c81195861939?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              width={500}
              height={500}
              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
              alt="Rounded Image"
            />

            {/* Overlay hitam transparan */}
            <div className="absolute inset-0 bg-black/60 flex justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div className="flex flex-col text-center">
                <h2 className="text-white text-lg sm:text-xl font-bold">
                  {item.title}
                </h2>
                <span className="text-white text-sm sm:text-md">
                  {item.category}
                </span>
              </div>

              {/* Icon Kode dan View */}
              <div className="absolute text-white bg-[#021526] px-2 py-1 sm:px-3 sm:py-2 bottom-2 left-2 rounded-md">
                <FontAwesomeIcon icon={faCode} />
              </div>
              <div className="absolute text-white bg-[#021526] px-2 py-1 sm:px-3 sm:py-2 bottom-2 right-2 rounded-md">
                <FontAwesomeIcon icon={faEye} />
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Card;
