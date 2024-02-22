import InstagramButton from "../common/Buttons/InstagramButton";
import WhatsappButton from "../common/Buttons/WhatsappButton";
import useScreenWidth from "../../hooks/useScreenWidth";

const Footer = () => {
  const screenWidth = useScreenWidth();

  return (
    <footer className="py-2 px-4 lg:py-11 lg:px-[156px] flex justify-between lg:justify-start lg:gap-16 font-bold bg-ms-footer text-white relative">
      <div className="flex-col flex w-1/2 lg:w-auto">
        <span className="font-bodoni">CONTACTO</span>
        <a href="https://wa.me/543512836753" className="pl-3 lg:pl-0 mt-2">
          <span className="text-sm ">+54 351 283 6753</span>
        </a>
        <a
          href="https://www.instagram.com/matilde_showroom"
          className={`pl-3 lg:pl-0 mt-2 ${screenWidth < 1024 ? "hidden" : ""}`}
        >
          <span className="text-sm">Instagram</span>
        </a>
        <a href="mailto:matildeshowroomcba@gmail.com" className="pl-3 lg:pl-0 mt-2">
          <span className="text-sm">matildeshowroomcba@gmail.com</span>
        </a>
      </div>

      <div className="flex flex-col w-1/2 lg:w-auto items-end lg:items-center">
        <span className="font-bodoni">REDES</span>
        <InstagramButton color="white" size={screenWidth < 1024 ? 45 : 40} />
        <WhatsappButton color="white" size={screenWidth < 1024 ? 45 : 40} />
        <span className="text-sm mt-4 lg:hidden">
          Córdoba, Argentina - 2024
        </span>
      </div>

      {screenWidth >= 1024 && (
        <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2">
          <span className="text-sm">Córdoba, Argentina - 2024</span>
        </div>
      )}
    </footer>
  );
};

export default Footer;
