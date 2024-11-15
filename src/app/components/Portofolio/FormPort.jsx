"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

const Form = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [githubLink, setGitLink] = useState("");
  const [liveLink, setLiveLink] = useState("");

  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await fetch("/api/portfolio", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title,
        description,
        githubLink,
        liveLink,
      }),
    });

    if (res.ok) {
      router.push("/dashboard");
    }
  };
  return (
    <>
      <div className="flex items-center justify-center w-full mt-10">
        <form
          onSubmit={handleSubmit}
          className="ml-4 border-2 border-[#e2e2b6] p-10 rounded-lg shadow-md w-full max-w-2xl"
        >
          <h2 className="text-2xl font-bold mb-4 text-[#e2e2b6]">
            Upload Konten
          </h2>

          <div className="mb-4">
            <label className="block text-sm font-medium text-[#e2e2b6]">
              Judul Konten
            </label>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="block w-full px-3 py-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              placeholder="Masukkan judul konten"
              required
            />
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium text-[#e2e2b6]">
              Kategori Konten
            </label>
            <select
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="block w-full px-3 py-2 mt-1 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              required
            >
              <option value="" disabled>
                Pilih Kategori
              </option>
              <option value="Data Analyst">Data Analyst</option>
              <option value="Machine Learning">Machine Learning</option>
              <option value="Web Developer">Web Developer</option>
            </select>
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-black">
              Source Code
            </label>
            <input
              type="text"
              value={githubLink}
              onChange={(e) => setGitLink(e.target.value)}
              className="block w-full px-3 py-2 mt-1 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-[#e2e2b6]">
              Link View Website
            </label>s
            <input
              type="text"
              value={liveLink}
              onChange={(e) => setLiveLink(e.target.value)}
              className="block w-full px-3 py-2 mt-1 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-[#e2e2b6] focus:border-[#e2e2b6] sm:text-sm"
            />
          </div>
          <button
            type="submit"
            className="w-full px-4 py-2 text-black bg-[#e2e2b6] rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2"
          >
            Submit
          </button>
        </form>
      </div>
    </>
  );
};

export default Form;
