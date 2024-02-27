import PropTypes from "prop-types";
import WhatsappIcon from "../common/Icons/WhatsappIcon";
import InstagramIcon from "../common/Icons/InstagramIcon";
import useScreenWidth from "../../hooks/useScreenWidth";
import WhatsappButton from "../common/Buttons/WhatsappButton";
import InstagramButton from "../common/Buttons/InstagramButton";

import Caroussel from "../Caroussel/Caroussel";
import carousselData from "../../data/carousselData";

const AccordionInner = ({ sectionName, text, innerColor, media }) => {
  const screenWidth = useScreenWidth();

  const ColoredWppIcon = () => {
    const isBlack = screenWidth < 768 ? "black" : "white";
    return <WhatsappIcon color={isBlack} iconSize={25} />;
  };

  const ColoredInstagramIcon = () => {
    const isBlack = screenWidth < 768 ? "black" : "white";
    return <InstagramIcon color={isBlack} iconSize={25} />;
  };

  const renderContent = () => {
    switch (sectionName) {
      case "Producciones":
        return (
          <>
            <div className="w-full xl:w-1/2">
              <p
                dangerouslySetInnerHTML={{ __html: text }}
                className="lg:w-[400px] font-workSans text-sm md:text-lg lg:text-xl"
              />
            </div>
            <div className="w-[90%] mx-auto mt-8 xl:w-1/2 z-20 self-end">
              <Caroussel images={carousselData} />
            </div>
          </>
        );
      case "Contacto":
        return (
          <>
            <div className="w-full lg:w-[400px] xl:w-1/2 font-workSans text-sm md:text-lg lg:text-xl">
              <p dangerouslySetInnerHTML={{ __html: text }} />
              <div className="w-full mt-4 flex flex-col md:items-center xl:items-start ">
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
            </div>
            <div className="w-full lg:w-1/2 p-4 md:p-0 z-20">
              <img src={media} alt="" className="mx-auto xl:w-3/4" />
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
    <div className="accordion-info relative p-4 md:pt-4 md:pb-12 md:px-16 lg:p-20 xl:pt-[115px] xl:pl-[115px] lg:pb-16 flex flex-col lg:flex-row lg:flex-wrap items-start gap-4 md:gap-8 lg:gap-8 xl:gap-0 animate__animated animate__fadeIn ">
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
