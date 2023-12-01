"use client";
import Image from "next/image";
import { useState } from "react";

export default function MyComponent() {
  const [isModelOpen, setIsModelOpen] = useState(true);
  const [projectName, setProjectName] = useState("");

  const handleButtonClick = () => {
    console.log("Project Name:", projectName);
    // Add logic to create a model or perform any other action here
    // ...

    // Close the modal
    setIsModelOpen(false);
    setProjectName("");
  };

  return (
    <div className="flex flex-col bg-white pb-12 pl-8 pr-16 pt-7 max-md:px-5">
      <div className="flex w-full items-start justify-between gap-5 self-stretch max-md:max-w-full max-md:flex-wrap">
        <div className="flex items-stretch gap-2">
          <Image
            width={52}
            height={52}
            alt="logo"
            loading="lazy"
            src="/images/logo.svg"
            className="aspect-square w-[53px] max-w-full shrink-0 overflow-hidden object-contain object-center"
          />
          <div className="my-auto text-4xl font-extrabold text-purple-700">
            LAMA.
          </div>
        </div>
        <div className="flex items-center gap-5 self-end">
          <Image
            width={54}
            height={54}
            alt="settings"
            loading="lazy"
            src="/images/buttons/setting.svg"
            className="my-auto aspect-square w-[45px] max-w-full shrink-0 overflow-hidden object-contain object-center"
          />
          <Image
            width={64}
            height={64}
            alt="notification"
            loading="lazy"
            src="/images/buttons/notification.svg"
            className="aspect-square w-12 max-w-full shrink-0 self-stretch overflow-hidden object-contain object-center"
          />
        </div>
      </div>
      <div className="ml-40 mt-2.5 flex w-[199px] max-w-full items-stretch gap-1.5 self-start rounded-[35.323px] border-[0.75px] border-solid border-neutral-400 bg-white py-1.5 pl-4 pr-5 shadow max-md:ml-2.5 max-md:pr-5">
        <Image
          alt="hero_image"
          width={30}
          height={30}
          loading="lazy"
          src="/images/buttons/home.svg"
          className="aspect-square w-[29px] max-w-full shrink-0 overflow-hidden object-contain object-center"
        />
        <div className="my-auto grow self-center whitespace-nowrap text-xl text-neutral-700">
          Back to Home
        </div>
      </div>
      <button className="mt-2 self-center whitespace-nowrap text-4xl font-bold text-purple-700 max-md:max-w-full max-md:text-4xl">
        Create a New Project
      </button>
      <Image
        width={540}
        height={362}
        alt="hero_image"
        loading="lazy"
        src="/images/hero_image.svg"
        className="mt-7 aspect-[1.49] w-[539px] max-w-full self-center overflow-hidden object-contain object-center"
      />
      <div className="mt-10 max-w-[1495px] self-center text-center text-3xl text-zinc-500 max-md:max-w-full">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in
      </div>
      <div className="mb-16 mt-9 flex w-[570px] max-w-full items-stretch gap-4 self-center rounded-xl bg-gray-800 py-7 pl-8 pr-16 max-md:mb-10 max-md:flex-wrap max-md:px-5">
        <Image
          width={56}
          height={56}
          alt="plus button"
          loading="lazy"
          src="/images/buttons/plus.svg"
          className="aspect-square w-14 max-w-full shrink-0 overflow-hidden fill-stone-50 object-contain object-center"
        />
        <button
          onClick={() => setIsModelOpen(true)}
          className="mt-1 grow self-start whitespace-nowrap text-5xl font-semibold text-stone-50 max-md:text-4xl"
        >
          Create New Project
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
                onChange={(e) => setProjectName(e.target.value)}
              />

              <button
                className="focus:shadow-outline rounded bg-green-500 px-4 py-2 font-bold text-white hover:bg-green-700 focus:outline-none"
                onClick={handleButtonClick}
              >
                Create Model
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
