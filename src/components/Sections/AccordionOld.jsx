// TODO: rehacer
import { useState, useRef } from "react";
import Arrow from "../common/Icons/Arrow";
import PropTypes from "prop-types";
import Contact from "../Contact";
import Caroussel from "../Caroussel/Caroussel";
import carousselData from "../../data/carousselData";

const AccordionOld = ({ section }) => {
  const [isOpen, setIsOpen] = useState(false);
  // const accordionRef = useRef(null);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
    // if (!isOpen && accordionRef.current) {
    //   accordionRef.current.scrollIntoView({ behavior: "smooth" });
    // }
  };

  return (
    <div
      // ref={accordionRef}
      className={`accordion relative transition-all duration-500 lg:w-[80%] m-auto cursor-pointer ${
        isOpen
          ? `min-h-screen md:min-h-0 h-[900px] md:h-[600px]`
          : `min-h-[230px] lg:min-h-0`
      }`}
    >
      <div
        className={`accordion-title lg:h-[104px] lg:mx-0 flex flex-col ${
          isOpen
            ? `lg:flex-col ${section.color} transition-all duration-500`
            : "lg:flex-row"
        } gap-2 h-56 justify-between lg:border-b lg:border-black`}
      >
        <div
          className={`flex flex-col lg:flex-row lg:w-full lg:h-full lg:items-center border-b border-black lg:border-transparent text-2xl lg:px-6 gap-2 lg:gap-4 pb-2 w-3/4 accordion-title ${
            isOpen && "lg:mt-8"
          }`}
          onClick={toggleAccordion}
        >
          <span className="lg:text-[64px]">{section.number}</span>
          <span className="lg:text-[32px]">{section.name}</span>
        </div>

        {isOpen && (
          <div className="pt-28 pl-28 animate__animated animate__fadeIn accordion-info lg:flex justify-between items-end">
            {section.name !== "Contacto" && section.name !== "Producciones" && (
              <>
                <p
                  className="lg:w-2/5 lg: mt-5"
                  dangerouslySetInnerHTML={{ __html: section.text }}
                />
                <div className="right-56 lg:absolute z-50">
                  <img
                    className="my-0 mx-auto"
                    src={section.media}
                    alt="image"
                  />
                </div>
              </>
            )}
            {section.name === "Producciones" && (
              <>
                <p dangerouslySetInnerHTML={{ __html: section.text }} />
                <div className="mt-9">
                  <Caroussel images={carousselData} />
                </div>
              </>
            )}
            {section.name === "Contacto" && (
              <>
                <p dangerouslySetInnerHTML={{ __html: section.text }} />
                <div>
                  <Contact />
                  <div className="w-full h-96 justify-center flex">
                    <img
                      className="w-auto h-64 mt-10"
                      src={section.media}
                      alt="Mapa"
                    />
                  </div>
                </div>
              </>
            )}
          </div>
        )}

        <div
          className="flex items-center gap-4 absolute bottom-3 right-8 lg:static accordion-arrow"
          onClick={toggleAccordion}
        >
          <span className="text-sm lg:hidden">
            {isOpen ? "Ver menos" : "Ver más"}
          </span>
          <div className={isOpen ? "rotate-180" : ""}>
            <Arrow />
          </div>
        </div>
      </div>
    </div>
  );
};

AccordionOld.propTypes = {
  section: PropTypes.object.isRequired,
};

export default AccordionOld;
