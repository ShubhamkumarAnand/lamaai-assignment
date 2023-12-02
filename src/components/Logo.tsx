import Image from "next/image";

export default function Logo() {
  return (
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
  );
}
