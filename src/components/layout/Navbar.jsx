import Logo from "../../Images/Logo.png";
import InstagramIcon from "../common/Icons/InstagramIcon";
import WppIcon from "../common/Icons/WppIcon";

const Navbar = () => {
  return (
    <header className="py-2 px-4 lg:px-[156px] flex w-full justify-between items-center bg-ms-background">
      <img src={Logo} className="w-32" alt="" />
      <div className="flex">
        <div className="border-r border-black pr-4">
          <InstagramIcon color="black" />
        </div>
        <div className="pl-4">
          <WppIcon color="black" />
        </div>
      </div>
    </header>
  );
};

export default Navbar;
