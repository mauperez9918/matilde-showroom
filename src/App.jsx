import Banner from "./components/Banner/Banner";
import Footer from "./components/layout/Footer";
import Navbar from "./components/layout/Navbar";
import Sections from "./components/layout/Sections";
import "animate.css";

const App = () => {
  return (
    <>
      <Navbar />
      <Banner />
      <Sections />
      <Footer />
    </>
  );
};

export default App;
