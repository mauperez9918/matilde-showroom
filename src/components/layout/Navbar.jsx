import logoMobile from "../../Images/logo_mobile.png";
import logoDesktop from "../../Images/logo_desktop.png";
import InstagramIcon from "../common/Icons/InstagramIcon";
import WppIcon from "../common/Icons/WppIcon";
import useScreenWidth from "../../hooks/useScreenWidth";

const Navbar = () => {
  const screenWidth = useScreenWidth();

  return (
    <header className="sticky top-0 z-50 py-3 px-4 lg:py-[29px] lg:px-[156px] flex w-full justify-between items-center bg-ms-background">
      <img
        src={screenWidth < 1024 ? logoMobile : logoDesktop}
        alt="matilde showroom logo"
        // className="h-16 "
        className={`w-auto ${screenWidth < 1024 ? "h-16" : "h-8"}`}
      />
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
