import bannerWeb1 from "../../Images/img-banner01.png";
import bannerWeb2 from "../../Images/img-banner02.png";
import bannerMobile from "../../Images/banner-mobile.png";

const Banner = () => {
  return (
    <div className="relative w-screen">
      <img className="w-screen" src={bannerMobile} alt="Imagen Banner" />
      <div className="font-bodoni last:flex flex-col items-center absolute inset-x-0 bottom-1/4 w-full text-white text-2xl sm:text-5xl">
        <span>Prendas únicas</span>
        <span>y esenciales</span>
      </div>
    </div>
  );
};

export default Banner;
