import Accordion from "./components/Sections/Accordion";
import Footer from "./components/layout/Footer";
import Navbar from "./components/layout/Navbar";
import { sectionsData } from "./data/sectionData";
import 'animate.css';

const App = () => {
  return (
    <>
      <Navbar />
      <section>
        {sectionsData.map((section) => {
          return <Accordion key={section.name} section={section} />;
        })}
      </section>
      <Footer />
    </>
  );
};

export default App;
