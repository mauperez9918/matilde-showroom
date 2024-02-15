import Accordion from "../Sections/Accordion";
// import AccordionOld from "../Sections/AccordionOld";
import { sectionsData } from "../../data/sectionData";

const Sections = () => {
  return (
    <section className="accordions py-2 px-4 lg:px-[156px] lg:py-[88px]">
      {sectionsData.map((section) => {
        return <Accordion key={section.name} section={section} />;
      })}
    </section>
  );
};

export default Sections;
