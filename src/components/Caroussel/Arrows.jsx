import PropTypes from "prop-types";
import Arrow from "../common/Icons/Arrow";
import carousselData from "../../data/carousselData";

const Arrows = ({ position, decreasePosition, increasePosition }) => {
  return (
    <div className="h-12">
      {position > 0 && (
        <div
          className="absolute bottom-6 left-6 rotate-90 cursor-pointer arrow-previous"
          onClick={decreasePosition}
        >
          <Arrow />
        </div>
      )}

      {/* ARROW NEXT*/}
      {position !== carousselData.length - 1 && (
        <div
          className="absolute bottom-6 right-6 -rotate-90 cursor-pointer arrow-next"
          onClick={increasePosition}
        >
          <Arrow />
        </div>
      )}
    </div>
  );
};

Arrows.propTypes = {
  position: PropTypes.number.isRequired,
  decreasePosition: PropTypes.func.isRequired,
  increasePosition: PropTypes.func.isRequired,
};

export default Arrows;
