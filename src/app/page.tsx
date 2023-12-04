import Image from "next/image";
import Navbar from "~/components/Navbar";
import UserRegistrationModel from "~/components/UserRegistrationModel";

export default function MyComponent() {
  return (
    <div className="flex flex-col">
      <Navbar />
      <h1 className="self-center mt-2 text-6xl font-bold text-purple-700 whitespace-nowrap max-md:max-w-full max-md:text-4xl">
        Create a New Project
      </h1>
      <Image
        width={540}
        height={362}
        alt="hero_image"
        loading="lazy"
        src="/images/hero_image.png"
        className="mt-7 aspect-[1.49] w-[539px] max-w-full self-center overflow-hidden object-contain object-center"
      />
      <div className="mt-10 max-w-[1495px] self-center text-center text-3xl text-zinc-500 max-md:max-w-full">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
        dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
        aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
      </div>
      <UserRegistrationModel />
    </div>
  );
}
