import React from "react";

export default function EpisodeFeature() {
  return (
    <form>
      <header className="header shadow bg-purple-700 flex items-center justify-between gap-5 mt-10 pl-12 pr-16 py-5 rounded-2xl border-[0.719px] border-solid border-lime-500 max-md:max-w-full max-md:flex-wrap max-md:mt-10 max-md:px-5">
        <h1 className="my-auto text-3xl font-bold leading-8 tracking-normal text-white grow whitespace-nowrap max-md:max-w-full">
          All files are processed! Your widget is ready to go!
        </h1>
        <div className="text-neutral-700 text-center text-2xl font-bold leading-7 tracking-normal relative whitespace-nowrap overflow-hidden self-stretch aspect-[3.0943396226415096] justify-center items-stretch px-9 py-4 p-2">
          <button
            className="absolute inset-0 flex items-center justify-center w-full rounded-lg bg-gray-50"
            aria-label="Try it out!">
            Try it out!
          </button>
        </div>
      </header>
    </form>
  );
}
