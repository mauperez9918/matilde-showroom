import { useState } from "react";
import Arrow from "../common/Icons/Arrow";
import PropTypes from "prop-types";
// import Contact from "../Contact";
// import Caroussel from "../Caroussel/Caroussel";
// import carousselData from "../../data/carousselData";
import AccordionInner from "./AccordionInner";
import "./Accordion.css"

const Accordion = ({ section }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  console.log("section.color", section.color);

  return (
    <div className="accordion">
      {/* TODO: hover on color */}
      <div
        // className={`accordion-title p-6 flex items-center justify-between border-b border-black cursor-pointer
        // ${ !isOpen ? "lg:bg-transparent" : section.color }
        // `}
        className={`accordion-title p-6 flex items-center justify-between border-b border-black cursor-pointer 
        ${ !isOpen ? "lg:bg-transparent" : section.color }
        `}
        onClick={toggleAccordion}
      >
        <div className="flex items-center gap-6">
          <span className="lg:text-[64px]">{section.number}</span>
          <span className="lg:text-[32px]">{section.name}</span>
        </div>
        <div
          className={`arrowContainer ${
            isOpen ? "rotate-180 transition-all duration-200 ease-in-out" : ""
          }`}
        >
          <Arrow />
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
