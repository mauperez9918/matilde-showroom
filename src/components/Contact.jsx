import ButtonBrown from "./common/Buttons/ButtonBrown";
import InstagramIcon from "./common/Icons/InstagramIcon";
import WppIcon from "./common/Icons/WppIcon";

const instagramIcon = <InstagramIcon color="#000" />;
const wppIcon = <WppIcon color="#000" />;

const Contact = () => {
  return (
    <div className="accordion-contact">
      <p className="mt-4 px-[10px]">Encontranos en:</p>
      <div className="flex justify-between items-center gap-8 py-2">
        <ButtonBrown icon={wppIcon} text="Instagram" />
        <ButtonBrown icon={instagramIcon} text="Whatsapp" />
      </div>
    </div>
  );
};

export default Contact;
