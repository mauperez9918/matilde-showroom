import { useState } from "react";
import Arrow from "../common/Icons/Arrow";
import PropTypes from "prop-types";
import Contact from "../Contact";

const Accordion = ({ section }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div
      className={`accordion p-4 relative transition-all duration-500 bg-ms-background ${
        isOpen
          ? `min-h-screen h-[870px] bg-ms-background `
          : `min-h-[230px] lg:min-h-0 ${section.color} lg:bg-white`
      }`}
    >
      <div
        className={`lg:h-[104px] py-2 px-4 lg:px-[156px] flex flex-col ${
          isOpen ? "lg:flex-col" : "lg:flex-row"
        } gap-2 h-56 justify-between lg:border-b lg:border-black`}
        onClick={toggleAccordion}
      >
        <div className="flex flex-col lg:flex-row lg:items-center border-b border-black lg:border-transparent text-2xl gap-2 lg:gap-4 pb-2 w-3/4 accordion-title">
          <span className="lg:text-[64px]">{section.number}</span>
          <span className="lg:text-[32px]">{section.name}</span>
        </div>

        {isOpen && (
          <div className="py-4 lg:py-16 animate__animated animate__fadeInDown animate__faster accordion-info">
            <p dangerouslySetInnerHTML={{ __html: section.text }} />

            {section.name !== "Contacto" ? (
              <div className="mb-10">
                <img
                  className="block my-0 mx-auto"
                  src={section.media}
                  alt=""
                />
              </div>
            ) : (
              <div className="mb-10">
                <Contact />
                <img
                  className="block w-full mt-8"
                  src={section.media}
                  alt="Mapa"
                />
              </div>
            )}
          </div>
        )}

        <div className="flex items-center gap-4 absolute bottom-3 right-8 lg:static accordion-arrow">
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

Accordion.propTypes = {
  section: PropTypes.object.isRequired,
};

export default Accordion;
