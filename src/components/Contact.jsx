import ButtonBrown from "./common/Buttons/ButtonBrown";
import InstagramIcon from "./common/Icons/InstagramIcon";
import WppIcon from "./common/Icons/WppIcon";

const instagramIcon = <InstagramIcon color="#000" size="38" />;
const wppIcon = <WppIcon color="#000" size="38" />;

const Contact = () => {
  return (
    <div className="accordion-contact justify-center min-[528px]:flex-row sm:flex ">
      <p className="mt-4 px-[10px]">Encontranos en:</p>
      <div className="flex items-center gap-8 py-2">
        <ButtonBrown icon={wppIcon} text="Whatsapp" />
        <ButtonBrown icon={instagramIcon} text="Instagram" />
      </div>
    </div>
  );
};

export default Contact;
