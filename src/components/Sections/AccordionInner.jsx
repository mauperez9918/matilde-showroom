import PropTypes from "prop-types";
import WhatsappIcon from "../common/Icons/WhatsappIcon";
import InstagramIcon from "../common/Icons/InstagramIcon";
import useScreenWidth from "../../hooks/useScreenWidth";
import WhatsappButton from "../common/Buttons/WhatsappButton";
import InstagramButton from "../common/Buttons/InstagramButton";

const AccordionInner = ({ sectionName, text, innerColor, media }) => {
  const screenWidth = useScreenWidth();

  const ColoredWppIcon = () => {
    const isBlack = screenWidth < 768 ? "black" : "white";
    return <WhatsappIcon color={isBlack} size={25} />;
  };

  const ColoredInstagramIcon = () => {
    const isBlack = screenWidth < 768 ? "black" : "white";
    return <InstagramIcon color={isBlack} size={25} />;
  };

  const renderContent = () => {
    switch (sectionName) {
      case "Producciones":
        return (
          <div className="w-full lg:w-1/2">
            <p
              dangerouslySetInnerHTML={{ __html: text }}
              className="lg:w-[400px] font-workSans text-sm md:text-lg lg:text-xl"
            />
            {/* TODO: implement producciones inner */}
            <div className="w-1/2"></div>
          </div>
        );
      case "Contacto":
        return (
          <>
            <div className="w-full font-workSans text-sm md:text-lg lg:text-xl">
              <p
                dangerouslySetInnerHTML={{ __html: text }}
                className="lg:w-[400px]"
              />
            </div>
            <div className="w-full flex flex-col xl:flex-row">
              <div className="w-full lg:w-[400px] xl:w-1/2 flex flex-col md:items-center xl:items-start xl:mt-8">
                <p className="text-sm md:text-lg lg:text-xl">Encontranos en:</p>
                <div className="my-4 flex justify-between gap-6">
                  <WhatsappButton
                    icon={ColoredWppIcon}
                    className={`${screenWidth < 768 ? "" : "isBlack"}`}
                    isButton={true}
                  >
                    Whatsapp
                  </WhatsappButton>
                  <InstagramButton
                    icon={ColoredInstagramIcon}
                    className={`${screenWidth < 768 ? "" : "isBlack"}`}
                    isButton={true}
                  >
                    Instagram
                  </InstagramButton>
                </div>
              </div>
              <div className="w-full lg:w-[400px] xl:w-1/2 z-20 lg:self-start mt-8 xl:-mt-20 xl:-ml-20">
                <img
                  src={media}
                  alt=""
                  className="mx-auto md:w-2/3 lg:w-auto"
                />
              </div>
            </div>
          </>
        );
      default:
        return (
          <>
            <div className="w-full xl:w-1/2">
              <p
                dangerouslySetInnerHTML={{ __html: text }}
                className="lg:w-[400px] font-workSans text-sm md:text-lg lg:text-xl"
              />
            </div>
            <div className="w-full xl:w-1/2 z-20 self-end">
              <img
                src={media}
                alt=""
                className="mx-auto w-3/4 md:w-1/3 lg:w-auto"
              />
            </div>
          </>
        );
    }
  };

  return (
    <div className="accordion-info relative p-4 md:pt-4 md:pb-12 md:px-16 lg:pt-[115px] lg:pl-[115px] lg:pb-16 flex flex-col lg:flex-row lg:flex-wrap items-start gap-4 md:gap-8 lg:gap-8 xl:gap-0 animate__animated animate__fadeIn ">
      {renderContent()}
      <div
        className={`z-10 absolute bottom-0 right-0 lg:w-1/4 lg:h-full ${innerColor}`}
      ></div>
    </div>
  );
};

AccordionInner.propTypes = {
  sectionName: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  innerColor: PropTypes.string.isRequired,
  media: PropTypes.string.isRequired,
};

export default AccordionInner;
