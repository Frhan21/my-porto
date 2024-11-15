"use client";

import Link from "next/link";
import Form from "../components/Portofolio/FormPort";
import Table from "../components/Portofolio/TableData";
import { useEffect, useState } from "react";

const Page = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("/api/portfolio");
      const res = await response.json();
      setData(res);
    };
    fetchData();
  }, []);
  return (
    <>
      <div className="flex flex-col items-center justify-center h-fit mt-16 w-full text-[#e2e2b6]">
        <div className="mb-6 text-6xl font-extrabold">Welcome, Admin...</div>
        <div className="flex items-center justify-between w-1/2">
          <Link
            href="/"
            className="px-4 py-2 my-5 bg-[#e2e2b6] rounded-md text-blue-950"
          >
            Kembali ke awal
          </Link>
          <Link
            href="/dashboard/create"
            className="px-4 py-2 my-5 bg-[#e2e2b6] rounded-md text-blue-950"
          >
            Add project here
          </Link>
        </div>
        <Table data={data} />
      </div>
    </>
  );
};

export default Page;
