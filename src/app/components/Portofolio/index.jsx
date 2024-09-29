"use client";

import { useState } from "react";
import Card from "../Card";
import Pagination from "../Card/Pagination";

const Portofolio = () => {
  const [active, setActive] = useState("data-analyst");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 3;

  const portfolioData = [
    {
      title: "Data Analysis Project 1",
      category: "data-analyst",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      title: "Machine Learning Project 1",
      category: "machine-learning",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      title: "Web Developer Project 1",
      category: "web-developer",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      title: "Data Analysis Project 2",
      category: "data-analyst",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      title: "Machine Learning Project 2",
      category: "machine-learning",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      title: "Web Developer Project 2",
      category: "web-developer",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      title: "Data Analysis Project 3",
      category: "data-analyst",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      title: "Machine Learning Project 3",
      category: "machine-learning",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      title: "Web Developer Project 3",
      category: "web-developer",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
  ];

  const handleCategory = (category) => {
    setActive(category);
  };

  const filteredData = portfolioData.filter(
    (item) => item.category === active
  );

  const totalPages = Math.ceil(filteredData.length / itemsPerPage);

  const currentData = filteredData.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const goToNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const goToPreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <>
      <div className="w-full h-fit flex flex-col justify-center items-center mt-16">
        {/* Navbar Portofolio */}
        <div className="flex flex-col gap-4 items-center justify-center text-center">
          <span className="text-4xl md:text-5xl font-extrabold text-[#E2E2B6]">
            PORTOFOLIO
          </span>
          <div className="flex flex-row justify-center items-center md:gap-5 gap-2 mt-5 text-center">
            <button
              onClick={() => {handleCategory("data-analyst"); setCurrentPage(1)}}
              className={`text-md md:text-xl font-extrabold text-[#E2E2B6] px-4 py-2 hover:bg-white/10 cursor-pointer rounded-md hover:backdrop-blur-lg ${
                active == "data-analyst" ? "bg-white/10" : ""
              } transition-all ease-in-out duration-300`}
            >
              Data Analyst
            </button>
            <button
              onClick={() => handleCategory("machine-learning")}
              className={`text-md md:text-xl font-extrabold text-[#E2E2B6] px-4 py-2 hover:bg-white/10 cursor-pointer rounded-md hover:backdrop-blur-lg ${
                active == "machine-learning" ? "bg-white/10" : ""
              } transition-all ease-in-out duration-300`}
            >
              Machine Learning and AI
            </button>
            <button
              onClick={() => handleCategory("web-developer")}
              className={`text-md md:text-xl font-extrabold text-[#E2E2B6] px-4 py-2 hover:bg-white/10 cursor-pointer rounded-md hover:backdrop-blur-lg ${
                active == "web-developer" ? "bg-white/10" : ""
              } transition-all ease-in-out duration-300`}
            >
              Web Developer
            </button>
          </div>
        </div>

        {/* Card Portofolionya */}
        <Card data={currentData} />

        {/* Pagination */}
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          goToPreviousPage={goToPreviousPage}
          goToNextPage={goToNextPage}
        />
      </div>
    </>
  );
};

export default Portofolio;
