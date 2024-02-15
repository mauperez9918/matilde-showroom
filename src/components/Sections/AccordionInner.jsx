import PropTypes from "prop-types";
import Button from "../common/Buttons/Button";
import WppIcon from "../common/Icons/WppIcon";
import InstagramIcon from "../common/Icons/InstagramIcon";

const WhiteWppIcon = () => {
  return <WppIcon color="white" size={25} />;
};

const WhiteInstagramIcon = () => {
  return <InstagramIcon color="white" size={25} />;
};

const AccordionInner = ({ sectionName, text, innerColor, media }) => {
  const renderContent = () => {
    switch (sectionName) {
      case "Producciones":
        return (
          <div className="w-1/2">
            <p
              dangerouslySetInnerHTML={{ __html: text }}
              className="w-[400px] font-workSans text-xl"
            />
            {/* TODO: implement producciones inner */}
            <div className="w-1/2"></div>
          </div>
        );
      case "Contacto":
        return (
          <>
            <div className="w-full font-workSans text-xl">
              <p dangerouslySetInnerHTML={{ __html: text }} 
              className="w-[400px]"/>
            </div>
            <div className="flex mt-8">
              <div className="w-1/2">
                <p>Encontranos en:</p>
                <div className="mt-4 flex gap-6">
                  <Button icon={WhiteWppIcon} text="Whatsapp" isBlack={true} />
                  <Button
                    icon={WhiteInstagramIcon}
                    text="Instagram"
                    isBlack={true}
                  />
                </div>
              </div>
              <div className="w-1/2 z-20 self-start -mt-20">
                <img src={media} alt="" className="mx-auto" />
              </div>
            </div>
          </>
        );
      default:
        return (
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
        );
    }
  };

  return (
    <>
      <div className="accordion-info animate__animated animate__fadeIn relative lg:pt-[115px] lg:pl-[115px] lg:pb-16 flex flex-wrap items-start">
        {renderContent()}
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
