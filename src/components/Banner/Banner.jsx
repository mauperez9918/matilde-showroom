import bannerImage1 from "../../Images/img-banner01.png";
import bannerImage2 from "../../Images/img-banner02.png";

const Banner = () => {
  return (
    <div className="z-10 h-52">
      <img className="fixed top-6" src={bannerImage2} alt="Imagen " />
      <div className="absolute text-center w-full h-52 grid place-content-center">
        <span>Prendas únicas y esenciales</span>
      </div>
    </div>
  );
};

export default Banner;
