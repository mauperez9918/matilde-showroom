import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Caroussel.css";

import PropTypes from "prop-types";

import useScreenWidth from "../../hooks/useScreenWidth";

const Caroussel = ({ images }) => {
  const screenWidth = useScreenWidth();

  const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    dots: false,
    speed: 500,
    centerPadding: "30px",
    slidesToShow: 1,
  };

  const ipadSettings = {
    className: "center",
    centerMode: true,
    infinite: true,
    dots: false,
    speed: 500,
    centerPadding: "00px",
    slidesToShow: 3,
  };

  const desktopSettings = {
    className: "center",
    centerMode: true,
    infinite: true,
    dots: false,
    speed: 500,
    centerPadding: "140px",
    slidesToShow: 1,
  };

  let sliderSettings;

  if (screenWidth < 768) {
    sliderSettings = settings;
  } else if (screenWidth < 1024) {
    sliderSettings = ipadSettings;
  } else if (screenWidth >= 1200) {
    sliderSettings = desktopSettings;
  }

  return (
    <div>
      <Slider {...sliderSettings}>
        {images.map((image, index) => {
          return (
            <div key={index}>
              <img src={image.imageUrl} alt={`Image ${index}`} />
            </div>
          );
        })}
      </Slider>
    </div>
  );
};

Caroussel.propTypes = {
  images: PropTypes.array.isRequired,
};

export default Caroussel;
