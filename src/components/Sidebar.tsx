import React from "react";
import Logo from "~/components/Logo";

export default function EpisodeSidebar() {
  return (
    <div className="flex flex-col items-start w-full px-4 bg-purple-100 rounded-none grow py-9 max-md:max-w-full max-md:mt-10">
      <Logo />
      <div className="text-zinc-700 text-sm font-medium leading-5 tracking-normal whitespace-nowrap ml-5 mt-8 self-start max-md:ml-2.5">
        Podcast Upload Flow KL
      </div>
      <div className="items-stretch self-stretch bg-purple-700 flex justify-between gap-3.5 mt-6 pl-4 pr-8 py-4 rounded-[132.5px] max-md:max-w-full max-md:flex-wrap max-md:pr-5">
        <div
          className="text-white text-right text-xl font-semibold leading-7 tracking-normal whitespace-nowrap justify-center items-center bg-gray-800 aspect-square h-10 pl-5 pr-3.5 rounded-[100px]"
          role="button"
          aria-label="Step 1">
          1
        </div>
        <div className="self-center my-auto text-sm font-semibold leading-5 tracking-normal text-white grow shrink basis-auto">
          Projects
        </div>
      </div>
      <div className="self-center flex items-stretch gap-3.5 mt-4">
        <div
          className="text-neutral-700 text-right text-xl font-semibold leading-7 tracking-normal whitespace-nowrap justify-center items-center bg-zinc-900 bg-opacity-10 aspect-square h-10 px-4 rounded-[100px]"
          role="button"
          aria-label="Step 2">
          2
        </div>
        <div className="self-center my-auto text-sm font-medium leading-5 tracking-normal text-zinc-700 grow shrink basis-auto">
          Edit Transcription
        </div>
      </div>
      <div className="items-stretch self-stretch bg-zinc-900 bg-opacity-10 flex justify-between gap-3.5 mt-4 pl-4 pr-8 py-4 max-md:max-w-full max-md:flex-wrap max-md:pr-5">
        <div
          className="text-neutral-700 text-right text-xl font-semibold leading-7 tracking-normal whitespace-nowrap justify-center items-center bg-zinc-900 bg-opacity-10 aspect-square h-10 px-4 rounded-[100px]"
          role="button"
          aria-label="Step 3">
          3
        </div>
        <div className="self-center my-auto text-sm font-medium leading-5 tracking-normal text-zinc-700 grow shrink basis-auto">
          Choose Platform
        </div>
      </div>
      <div className="self-center flex items-stretch gap-3.5 mt-5">
        <div
          className="text-neutral-700 text-right text-xl font-semibold leading-7 tracking-normal whitespace-nowrap justify-center items-center bg-zinc-900 bg-opacity-10 aspect-square h-10 pl-3 pr-4 rounded-[100px]"
          role="button"
          aria-label="Step 4">
          4
        </div>
        <div className="self-center my-auto text-sm font-medium leading-5 tracking-normal text-zinc-700 grow shrink basis-auto">
          Activate
        </div>
      </div>
      <div className="bg-stone-300 self-center w-[403px] shrink-0 max-w-full h-px mt-4" />
      <div className="bg-stone-300 self-center w-[403px] shrink-0 max-w-full h-px mt-[677px] max-md:mt-10" />
      <div className="flex items-stretch gap-3.5 ml-3.5 mt-8 self-start max-md:ml-2.5">
        <div className="justify-center items-center bg-zinc-900 bg-opacity-10 flex aspect-square flex-col w-10 h-10 px-2 rounded-[100px]">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/f568ca3ea8d090b191234fff4d5cc556748bbcd904df05dc5eec5e2f6589530d?apiKey=e3e0c9bbb92946ba8281185d5ecce439&"
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
