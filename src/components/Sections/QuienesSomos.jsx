import { useState } from "react";
import Arrow from "../common/Icons/Arrow";

const QuienesSomos = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = ({ color }) => {
    setIsOpen(!isOpen);
  };
  return (
    <div className="accordion">
      <div
        className={`accordion-title p-6 flex items-center justify-between border-b border-black 
        ${!isOpen ? "lg:bg-transparent" : color}`}
        onClick={toggleAccordion}
      >
        <div className="flex items-center gap-6">
          <span className="lg:text-[64px]">01</span>
          <span className="lg:text-[32px]">Quienes somos</span>
        </div>
        <div
          className={`arrowContainer ${
            isOpen ? "rotate-180 transition-all duration-200 ease-in-out" : ""
          }`}
        >
          <Arrow />
        </div>
      </div>
      {isOpen && <div className="accordion-inner"></div>}
    </div>
  );
};

export default QuienesSomos;
