import Logo from "~/components/Logo";
import BackToHome from "~/components/BackToHome";
import SideIcon from "~/components/SideIcon";

export default function Navbar() {
  return (
    <div className="flex flex-col pb-8 pl-8 pr-16 bg-white pt-7 max-md:px-5">
      <div className="flex items-start self-stretch justify-between w-full gap-4 mb-6 max-md:max-w-full max-md:flex-wrap">
        <Logo />
        <SideIcon />
      </div>
      <BackToHome />
    </div>
  );
}
