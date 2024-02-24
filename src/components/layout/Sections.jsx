import Accordion from "../Sections/Accordion";
import { sectionsData } from "../../data/sectionData";

const Sections = () => {
  return (
    <section className="accordions lg:px-[156px] lg:py-[88px] bg-ms-background">
      {sectionsData.map((section) => {
        return <Accordion key={section.name} section={section} />;
      })}
    </section>
  );
};

export default Sections;
