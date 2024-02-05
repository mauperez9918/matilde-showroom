import bannerDesktop1 from "../../Images/banner-desktop1.png";
import bannerDesktop2 from "../../Images/banner-desktop2.png";
import bannerMobile from "../../Images/banner-mobile.png";

const Banner = () => {
  return (
    <div className="relative md:flex">
      <img
        className="w-full md:hidden"
        src={bannerMobile}
        alt="Imagen Banner 2"
      />

      <img
        className="hidden w-1/2 md:flex"
        src={bannerDesktop1}
        alt="Imagen Banner 2"
      />

      <img
        className="hidden w-1/2 md:flex"
        src={bannerDesktop2}
        alt="Imagen Banner"
      />

      <div className="font-bodoni last:flex flex-col items-center absolute inset-x-0 bottom-1/4 w-full text-white text-2xl sm:text-5xl lg:text-6xl">
        <span>Prendas únicas</span>
        <span>y esenciales</span>
      </div>
    </div>
  );
};

export default Banner;
