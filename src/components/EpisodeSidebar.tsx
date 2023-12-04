import Link from "next/link";
import React from "react";
import Logo from "~/components/Logo";
import Image from "next/image";

export default function EpisodeSidebar({ projectId }: { projectId: string }) {
  return (
    <div className="flex flex-col items-start w-full px-4 bg-purple-100 rounded-none grow py-9 max-md:max-w-full max-md:mt-10">
      <Logo />
      <div className="text-zinc-700 text-2xl font-medium leading-5 tracking-normal whitespace-nowrap ml-5 mt-8 self-start max-md:ml-2.5 ">
        Podcast Upload Flow L
      </div>
      <Link
        href={`/projects/${projectId}`}
        className="items-stretch self-stretch bg-purple-700 flex justify-between gap-3.5 mt-6 pl-4 pr-8 py-4 rounded-[132.5px] max-md:max-w-full max-md:flex-wrap max-md:pr-5">
        <div
          className="text-white text-center flex justify-center text-xl font-semibold leading-7 tracking-normal whitespace-nowrap items-center bg-gray-800 aspect-square h-10 rounded-full"
          role="button"
          aria-label="Step 1">
          1
        </div>
        <div className="self-center my-auto text-xl font-semibold leading-5 tracking-normal text-white grow shrink basis-auto">
          Projects
        </div>
      </Link>
      <Link
        href="#"
        className="items-stretch self-stretch bg-gray-500 flex justify-between gap-3.5 mt-6 pl-4 pr-8 py-4 rounded-[132.5px] max-md:max-w-full max-md:flex-wrap max-md:pr-5">
        <div
          className="text-white text-center flex justify-center text-xl font-semibold leading-7 tracking-normal whitespace-nowrap items-center bg-gray-800 aspect-square h-10 rounded-full"
          role="button"
          aria-label="Step 1">
          2
        </div>
        <div className="self-center my-auto text-xl font-semibold leading-5 tracking-normal text-white grow shrink basis-auto">
          Edit Configuration
        </div>
      </Link>
      <Link
        href="#"
        className="items-stretch self-stretch bg-gray-500 flex justify-between gap-3.5 mt-6 pl-4 pr-8 py-4 rounded-[132.5px] max-md:max-w-full max-md:flex-wrap max-md:pr-5">
        <div
          className="text-white text-center flex justify-center text-xl font-semibold leading-7 tracking-normal whitespace-nowrap items-center bg-gray-800 aspect-square h-10 rounded-full"
          role="button"
          aria-label="Step 1">
          3
        </div>
        <div className="self-center my-auto text-xl font-semibold leading-5 tracking-normal text-white grow shrink basis-auto">
          Deploy
        </div>
      </Link>
      <div className="bg-stone-300 self-center w-[403px] shrink-0 max-w-full h-px mt-4" />
      <div className="bg-stone-300 self-center w-[403px] shrink-0 max-w-full h-px mt-[677px] max-md:mt-10" />
      <div className="flex items-stretch gap-3.5 ml-3.5 mt-8 self-start max-md:ml-2.5">
        <div className="justify-center items-center bg-zinc-900 bg-opacity-10 flex aspect-square flex-col w-10 h-10 px-2 rounded-[100px]">
          <Image
            width={8}
            height={8}
            loading="lazy"
            src="/images/buttons/settings.svg"
            className="object-contain object-center w-full overflow-hidden aspect-square"
            alt="Settings"
          />
        </div>
        <div className="self-center my-auto text-sm font-medium leading-5 tracking-normal text-zinc-700 grow shrink basis-auto">
          Settings
        </div>
      </div>
    </div>
  );
}
