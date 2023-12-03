"use client";

import Image from "next/image";
import { useState } from "react";

export default function CreateProjectModel() {
  const [isModelOpen, setIsModelOpen] = useState(false);
  const [projectName, setProjectName] = useState("");

  const handleButtonClick = async () => {
    console.log("Project Name:", projectName);
    setIsModelOpen(false);
    setProjectName("");
  };

  return (
    <div className="flex justify-center">
      <button
        onClick={() => setIsModelOpen(true)}
        className="flex items-stretch self-center max-w-full gap-4 px-4 py-3 mt-12 mb-16 bg-gray-800 rounded-xl max-md:mb-10 max-md:flex-wrap max-md:px-5">
        <Image
          width={56}
          height={56}
          alt="plus button"
          loading="lazy"
          src="/images/buttons/plus.svg"
          className="object-contain object-center max-w-full overflow-hidden aspect-square shrink-0 fill-stone-50"
        />
        <p className="self-start my-auto text-3xl font-semibold grow whitespace-nowrap text-stone-50 max-md:text-4xl">
          Create New Project
        </p>
      </button>
      {isModelOpen && (
        <div className="fixed top-0 left-0 flex items-center justify-center w-full h-full shadow-lg">
          <div className="w-full max-w-md p-8 bg-white rounded">
            <h2 className="mb-4 text-xl font-bold">Enter Project Name</h2>
            <input
              type="text"
              className="w-full p-2 mb-4 border border-gray-300"
              placeholder="Project Name"
              value={projectName}
              required
              onChange={(e) => setProjectName(e.target.value)}
            />
            <div className="flex justify-end">
              <button
                className="px-4 py-2 font-semibold text-red-500 rounded focus:shadow-outline focus:outline-none"
                onClick={() => setIsModelOpen(false)}>
                Cancel
              </button>
              <button
                className="px-4 py-2 font-bold text-white bg-purple-500 rounded focus:shadow-outline hover:bg-purple-700 focus:outline-none"
                onClick={handleButtonClick}>
                Create
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
