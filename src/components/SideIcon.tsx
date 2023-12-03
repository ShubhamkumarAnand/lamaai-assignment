import Image from "next/image";
import Link from "next/link";

export default function SideIcon() {
  return (
    <div className="flex items-center gap-5 self-end">
      <Link href="/settings">
        <Image
          width={54}
          height={54}
          alt="settings"
          loading="lazy"
          src="/images/buttons/setting.svg"
          className="my-auto aspect-square w-[45px] max-w-full shrink-0 overflow-hidden object-contain object-center"
        />
      </Link>
      <Image
        width={64}
        height={64}
        alt="notification"
        loading="lazy"
        src="/images/buttons/notification.svg"
        className="aspect-square w-12 max-w-full shrink-0 self-stretch overflow-hidden object-contain object-center"
      />
    </div>
  );
}
