import InstagramIcon from "../common/Icons/InstagramIcon";
import WppIcon from "../common/Icons/WppIcon";

const Footer = () => {
  return (
    <footer className="absolute z-50py-2 px-4 lg:px-[156px] flex justify-between font-bold bg-ms-footer text-white">
      <div className="flex-col flex w-1/2">
        <span className="font-bodoni">CONTACTO</span>
        <span className="text-sm pl-3 mt-2">xxxxx - xxx xxxxxx</span>
        <span className="text-sm pl-3 py-1">correo@correo.com</span>
      </div>

      <div className="flex flex-col w-1/2 items-end">
        <span className="font-bodoni">REDES</span>
        <InstagramIcon color="white" />
        <WppIcon color="white" />
        <span className="text-sm mt-4">Córdoba, Argentina - 2023</span>
      </div>
    </footer>
  );
};

export default Footer;
