import { useState } from "react";
import Arrow from "../common/Icons/Arrow";
import PropTypes from "prop-types";
import AccordionInner from "./AccordionInner";
import "./Accordion.css";

const Accordion = ({ section }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="accordion">
      <div
        className={`accordion-title p-4 md:py-4 md:px-16 lg:p-8 flex flex-col lg:flex-row lg:items-center lg:justify-between lg:border-b lg:border-black cursor-pointer
        ${section.color}
        ${!isOpen ? "lg:bg-transparent" : section.color}
        `}
        onClick={toggleAccordion}
      >
        <div className="w-2/3 md:w-1/2 lg:w-auto flex flex-col lg:flex-row lg:items-center gap-2 lg:gap-6 border-b border-black lg:border-b-0 pb-2 lg:pb-0">
          <span className="text-2xl lg:text-[64px]">{section.number}</span>
          <span className="text-2xl lg:text-[32px]">{section.name}</span>
        </div>
        <div className="flex lg:block gap-2 self-end lg:self-auto mt-20 md:mt-9 lg:mt-0">
          <p className="text-xs lg:hidden">
            {isOpen ? "Ver menos" : "Ver más"}...
          </p>
          <div
            className={`arrowContainer ${
              isOpen ? "rotate-180 transition-all duration-200 ease-in-out" : ""
            }`}
          >
            <Arrow />
          </div>
        </div>
      </div>
      {isOpen && (
        <AccordionInner
          sectionName={section.name}
          text={section.text}
          innerColor={section.secondaryColor}
          media={section.media}
        />
      )}
    </div>
  );
};

Accordion.propTypes = {
  section: PropTypes.object.isRequired,
};

export default Accordion;
