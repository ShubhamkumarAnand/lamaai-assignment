import Link from "next/link";
import Image from "next/image";

export default function BackToHome() {
  return (
    <Link
      href="/"
      className="ml-40 mt-2.5 flex w-[199px] max-w-full items-stretch gap-1.5 self-start rounded-[35.323px] border-[0.75px] border-solid border-neutral-400 bg-white py-1.5 pl-4 pr-5 shadow max-md:ml-2.5 max-md:pr-5"
    >
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
    </Link>
  );
}
