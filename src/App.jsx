import Banner from "./components/Banner/Banner";
import Accordion from "./components/Sections/Accordion";
import Footer from "./components/layout/Footer";
import Navbar from "./components/layout/Navbar";
import { sectionsData } from "./data/sectionData";
import "animate.css";

const App = () => {
  return (
    <>
      <Navbar />
      <Banner />
      <div className="bg-ms-background">
        <section className="lg:pt-36 lg:pb-60">
          {sectionsData.map((section) => {
            return <Accordion key={section.name} section={section} />;
          })}
        </section>
      </div>
      <Footer />
    </>
  );
};

export default App;
