import { useState } from "react";
import Arrow from "../common/Icons/Arrow";
import PropTypes from "prop-types";

const Accordion = ({ section }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <details
      name="info"
      className={`p-4 ${section.color} section`}
      onClick={toggleAccordion}
    >
      <summary className="list-none">
        <div className="px-4 py-2 flex flex-col gap-2 h-56 justify-between">
          <div className="flex flex-col border-b border-black text-2xl gap-2 pb-2 w-3/4">
            <span>{section.number}</span>
            <span>{section.name}</span>
          </div>

          <div className="flex self-end items-center gap-4 pr-6 py-2">
            <span className="text-sm">{isOpen ? "Ver menos" : "Ver más"}</span>
            <div className={isOpen ? "rotate-180" : ""}>
              <Arrow />
            </div>
          </div>
        </div>
      </summary>
      <div className="section-info">
        <p
          className="mb-8 section-info-text"
          dangerouslySetInnerHTML={{ __html: section.text }}
        />
        <img src="" alt="" />
      </div>
    </details>
  );
};

Accordion.propTypes = {
  section: PropTypes.object.isRequired,
};

export default Accordion;
