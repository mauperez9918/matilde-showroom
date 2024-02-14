import PropTypes from "prop-types";
import ButtonBrown from "../common/Buttons/ButtonBrown";
import WppIcon from "../common/Icons/WppIcon";
import InstagramIcon from "../common/Icons/InstagramIcon";

const AccordionInner = ({ sectionName, text, innerColor, media }) => {
  return (
    <>
      <div className="accordion-info relative lg:pt-[115px] lg:pl-[115px] lg:pb-16 flex items-start">
        {sectionName !== "Producciones" && sectionName !== "Contacto" && (
          <>
            <div className="w-1/2">
              <p
                dangerouslySetInnerHTML={{ __html: text }}
                className="w-[400px] font-workSans text-xl"
              />
            </div>
            <div className="w-1/2 z-20 self-end">
              <img src={media} alt="" className="mx-auto" />
            </div>
          </>
        )}
        {sectionName === "Producciones" && (
          <>
            <div className="w-1/2">
              <p
                dangerouslySetInnerHTML={{ __html: text }}
                className="w-[400px] font-workSans text-xl"
              />
            </div>
            {/* TODO: implement producciones inner */}
            <div className="w-1/2"></div>
          </>
        )}
        {sectionName === "Contacto" && (
          <>
            <div className="w-1/2">
              <p
                dangerouslySetInnerHTML={{ __html: text }}
                className="w-[400px] font-workSans text-xl"
              />
              <div>
                <p>Encontranos en:</p>
                <ButtonBrown icon={WppIcon} text="Whatsapp" />
                <ButtonBrown icon={InstagramIcon} text="Instagram" />
              </div>
            </div>
          </>
        )}
        <div
          className={`z-10 absolute bottom-0 right-0 lg:w-[245px] lg:h-full ${innerColor}`}
        ></div>
      </div>
    </>
  );
};

AccordionInner.propTypes = {
  sectionName: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  innerColor: PropTypes.string.isRequired,
  media: PropTypes.string.isRequired,
};

export default AccordionInner;
