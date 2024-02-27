import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./style.css";

import PropTypes from "prop-types";

import useScreenWidth from "../../hooks/useScreenWidth";

const Caroussel = ({ images }) => {
  const screenWidth = useScreenWidth();

  const commonSettings = {
    className: "center",
    centerMode: true,
    infinite: true,
    dots: false,
    speed: 500,
  };

  const settings = {
    sm: {
      ...commonSettings,
      centerPadding: "30px",
      slidesToShow: 1,
    },
    md: {
      ...commonSettings,
      centerPadding: "00px",
      slidesToShow: 3,
    },
    xl: {
      ...commonSettings,
      centerPadding: "140px",
      slidesToShow: 1,
    },
  };

  const getSliderSettings = () => {
    if (screenWidth < 768) {
      return settings.sm;
    } else if (screenWidth < 1024) {
      return settings.md;
    } else {
      return settings.xl;
    }
  };

  const sliderSettings = getSliderSettings();

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
