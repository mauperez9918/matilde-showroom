import logoMobile from "../../Images/logo_mobile.png";
import logoDesktop from "../../Images/logo_desktop.png";
import useScreenWidth from "../../hooks/useScreenWidth";
import InstagramButton from "../common/Buttons/InstagramButton";
import WhatsappButton from "../common/Buttons/WhatsappButton";

const Navbar = () => {
  const screenWidth = useScreenWidth();

  return (
    <header className="sticky top-0 z-50 py-3 px-4 lg:py-[29px] lg:px-[156px] flex w-full justify-between items-center bg-ms-background">
      <a href="/">
        <img
          src={screenWidth < 1024 ? logoMobile : logoDesktop}
          alt="matilde showroom logo"
          className={`w-auto ${screenWidth < 1024 ? "h-16" : "h-8"}`}
        />
      </a>
      <div className="flex">
        <div className="border-r border-black pr-4">
          <InstagramButton color="black" size={48} />
        </div>
        <div className="pl-4">
          <WhatsappButton color="black" size={48} />
        </div>
      </div>
    </header>
  );
};

export default Navbar;
