import Logo from "~/components/Logo";
import BackToHome from "~/components/BackToHome";
import SideIcon from "~/components/SideIcon";

export default function Navbar() {
  return (
    <div className="flex flex-col bg-white pb-12 pl-8 pr-16 pt-7 max-md:px-5">
      <div className="mb-12 flex w-full items-start justify-between gap-5 self-stretch max-md:max-w-full max-md:flex-wrap">
        <Logo />
        <SideIcon />
      </div>
      <BackToHome />
    </div>
  );
}
