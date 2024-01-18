import { useState } from "react";
import Arrow from "../common/Icons/Arrow";
import PropTypes from "prop-types";
import ButtonBrown from "../common/Buttons/ButtonBrown";

const Accordion = ({ section, isImage }) => {
  const media = section.media;
  console.log("media", media);

  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div
      className={`p-4 pb-8 relative ${
        isOpen
          ? "min-h-screen bg-white transition-all duration-500"
          : `min-h-[230px] ${section.color}`
      } accordion`}
    >
      <div
        className="px-4 py-2 flex flex-col gap-2 h-56 justify-between"
        onClick={toggleAccordion}
      >
        <div className="flex flex-col border-b border-black text-2xl gap-2 pb-2 w-3/4 accordion-title">
          <span>{section.number}</span>
          <span>{section.name}</span>
        </div>

        {isOpen && (
          <div className="py-4 animate__animated animate__fadeInDown animate__faster accordion-info">
            <p dangerouslySetInnerHTML={{ __html: section.text }} />
            {isImage && (
              <img className="block my-0 mx-auto" src={section.media} alt="" />
            )}
            {section.name === "Contacto" && (
              // TODO: mover a componente
              <div className="accordion-contact">
                <p className="mt-4 px-[10px]">Encontranos en:</p>
                <ButtonBrown text="Whatsapp" />
              </div>
            )}
          </div>
        )}

        <div className="flex items-center gap-4 absolute bottom-4 right-8 accordion-arrow">
          <span className="text-sm">{isOpen ? "Ver menos" : "Ver más"}</span>
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
  isImage: PropTypes.boolean,
};

export default Accordion;
