"use client";

import Image from "next/image";
import { useState } from "react";
import { db } from "~/server/db";

export default function CreateProjectModel() {
  const [isModelOpen, setIsModelOpen] = useState(false);
  const [projectName, setProjectName] = useState("");

  const handleButtonClick = async () => {
    console.log("Project Name:", projectName);
    // await db.projects.create({
    //   data: {
    //     name: projectName,
    //   },
    // });
    setIsModelOpen(false);
    setProjectName("");
  };

  return (
    <div className="flex justify-center">
      <button
        onClick={() => setIsModelOpen(true)}
        className="mb-16 mt-12 flex max-w-full items-stretch gap-4 self-center rounded-xl bg-gray-800 px-4 py-3 max-md:mb-10 max-md:flex-wrap max-md:px-5"
      >
        <Image
          width={56}
          height={56}
          alt="plus button"
          loading="lazy"
          src="/images/buttons/plus.svg"
          className="aspect-square max-w-full shrink-0 overflow-hidden fill-stone-50 object-contain object-center"
        />
        <p className="my-auto grow self-start whitespace-nowrap text-3xl font-semibold text-stone-50 max-md:text-4xl">
          Create New Project
        </p>
      </button>
      {isModelOpen && (
        <div className="fixed left-0 top-0 flex h-full w-full items-center justify-center">
          <div className="w-full max-w-md rounded bg-white p-8">
            <h2 className="mb-4 text-xl font-bold">Enter Project Name</h2>
            <input
              type="text"
              className="mb-4 w-full border border-gray-300 p-2"
              placeholder="Project Name"
              value={projectName}
              required
              onChange={(e) => setProjectName(e.target.value)}
            />
            <div className="flex justify-end">
              <button
                className="focus:shadow-outline rounded px-4 py-2 font-semibold text-red-500 focus:outline-none"
                onClick={() => setIsModelOpen(false)}
              >
                Cancel
              </button>
              <button
                className="focus:shadow-outline rounded bg-purple-500 px-4 py-2 font-bold text-white hover:bg-purple-700 focus:outline-none"
                onClick={handleButtonClick}
              >
                Create
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
