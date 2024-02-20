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
          <div className="w-full lg:w-1/2">
            <p
              dangerouslySetInnerHTML={{ __html: text }}
              className="lg:w-[400px] font-workSans text-xl"
            />
            {/* TODO: implement producciones inner */}
            <div className="w-1/2"></div>
          </div>
        );
      case "Contacto":
        return (
          <>
            <div className="w-full font-workSans text-xl">
              <p
                dangerouslySetInnerHTML={{ __html: text }}
                className="lg:w-[400px]"
              />
            </div>
            <div className="w-full flex flex-col lg:flex-row mt-4 lg:mt-8">
              <div className="w-full lg:w-1/2 flex flex-col items-center lg:block">
                <p>Encontranos en:</p>
                <div className="my-4 flex gap-6">
                  <Button icon={WhiteWppIcon} text="Whatsapp" isBlack={true} />
                  <Button
                    icon={WhiteInstagramIcon}
                    text="Instagram"
                    isBlack={true}
                  />
                </div>
              </div>
              <div className="w-full lg:w-1/2 z-20 lg:self-start mt-8 lg:-mt-20 lg:-ml-20">
                <img src={media} alt="" className="mx-auto w-2/3 lg:w-auto" />
              </div>
            </div>
          </>
        );
      default:
        return (
          <>
            <div className="w-full lg:w-1/2">
              <p
                dangerouslySetInnerHTML={{ __html: text }}
                className="lg:w-[400px] font-workSans text-sm lg:text-xl"
              />
            </div>
            <div className="w-full lg:w-1/2 z-20 self-end">
              <img src={media} alt="" className="mx-auto w-1/3 lg:w-auto" />
            </div>
          </>
        );
    }
  };

  return (
    <>
      <div className="accordion-info animate__animated animate__fadeIn relative pt-4 pb-12 px-16 lg:pt-[115px] lg:pl-[115px] lg:pb-16 flex flex-col lg:flex-row lg:flex-wrap items-start gap-8 lg:gap-0">
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
