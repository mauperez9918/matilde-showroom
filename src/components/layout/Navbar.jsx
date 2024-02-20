import Logo from "../../Images/Logo.png";
import InstagramIcon from "../common/Icons/InstagramIcon";
import WppIcon from "../common/Icons/WppIcon";

const Navbar = () => {
  return (
    <header className="sticky top-0 z-50 py-2 px-4 lg:px-[156px] flex w-full justify-between items-center bg-ms-background lg:bg-white">
      <img src={Logo} className="w-32" alt="" />
      <div className="flex">
        <div className="border-r border-black pr-4">
          <InstagramIcon color="black" size={48} />
        </div>
        <div className="pl-4">
          <WppIcon color="black" size={48} />
        </div>
      </div>
    </header>
  );
};

export default Navbar;
