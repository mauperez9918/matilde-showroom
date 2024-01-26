import { useState } from "react";
import carousselData from "../../data/carousselData";
import Arrows from "./Arrows";

const Caroussel = () => {
  const [position, setPosition] = useState(0);

  const handlePositionChange = (newPosition) => {
    setPosition(newPosition);
  };

  const increasePosition = () => {
    const newPosition =
      position === carousselData.length - 1 ? 0 : position + 1;
    handlePositionChange(newPosition);
  };

  const decreasePosition = () => {
    const newPosition =
      position === 0 ? carousselData.length - 1 : position - 1;
    handlePositionChange(newPosition);
  };

  return (
    <div className="relative mt-9">
      <div className="w-full flex carousselWrapper transition-all duration-800">
        {/* IMG LEFT */}
        <div
          className={`w-[75px] self-end caroussel-previousImage ${
            position > 0 ? "visible opacity-100" : "invisible opacity-0"
          } transition-all duration-800`}
        >
          <img
            src={
              position > 0
                ? carousselData[position - 1].imageUrl
                : carousselData[position].imageUrl
            }
            alt={
              position > 0
                ? `produccion ${position - 1}`
                : `produccion ${position}`
            }
          />
        </div>

        {/* MAIN IMAGE */}
        <div className="w-auto mx-3 caroussel-imageWrapper">
          <img
            src={carousselData[position].imageUrl}
            alt={`produccion ${position}`}
            className="my-0 mx-auto opacity-100 transition-all duration-800"
          />
        </div>

        {/* IMG RIGHT */}
        <div
          className={`w-[75px] self-end caroussel-nextImage ${
            position === carousselData.length - 1
              ? "invisible opacity-0"
              : "visible opacity-100"
          } transition-all duration-800`}
        >
          <img
            src={
              position === carousselData.length - 1
                ? carousselData[position].imageUrl
                : carousselData[position + 1].imageUrl
            }
            alt={
              position === carousselData.length - 1
                ? `produccion ${position}`
                : `produccion ${position + 1}`
            }
          />
        </div>
      </div>
      <div className="carousselArrows">
        <Arrows
          position={position}
          increasePosition={increasePosition}
          decreasePosition={decreasePosition}
        />
      </div>
    </div>
  );
};

export default Caroussel;
