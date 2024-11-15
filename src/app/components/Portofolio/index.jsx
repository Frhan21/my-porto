"use client";

import { useEffect, useState } from "react";
import Card from "../Card";
import Pagination from "../Card/Pagination";

const Portofolio = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch("/api/portfolio");
      const data = await res.json();
      setData(data);
    };
    fetchData();
  }, [])
  return (
    <>
      <div className="flex flex-col items-center justify-center w-full mt-16 h-fit">
        <div className="flex flex-col items-center justify-center gap-5">
          <div className="text-5xl text-[#e2e2b6] font-bold">My Portofolio</div>
          <div className="px-2 py-1.5 w-full rounded-full text-center bg-[#e2e2b6]">Check this out !!!</div>
        </div>
        <Card data={data} />
      </div>
    </>
  );
};

export default Portofolio;
