import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Caroussel.css";

import PropTypes from "prop-types";

const Caroussel = ({ images }) => {
  const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    dots: false,
    speed: 500,
    centerPadding: "00px",
    slidesToShow: 3,
  };

  return (
    <div className="h-screen">
      <Slider {...settings}>
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
