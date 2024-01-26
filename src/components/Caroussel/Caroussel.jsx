import { useEffect, useState } from "react";
import carousselData from "../../data/carousselData";
import Arrow from "../common/Icons/Arrow";

const Caroussel = () => {
  const [position, setPosition] = useState(0);

  useEffect(() => {
    console.log("position", position);
  }, [position]);

  const increasePosition = () => {
    setPosition((prevPosition) => prevPosition + 1);
  };

  const decreasePosition = () => {
    setPosition((prevPosition) => prevPosition - 1);
  };

  return (
    <div className="relative carousselWrapper">
      <div className="h-full w-auto absolute top-0 left-0 bg-red-500 z-50 arrow-previous">
        <div
          className="relative top-[50%] rotate-90"
          onClick={decreasePosition}
        >
          <Arrow />
        </div>
      </div>

      <div className="w-full caroussel-imageWrapper">
        <img
          src={carousselData[position].imageUrl}
          alt=""
          className="max-w-[260px] my-0 mx-auto"
        />
      </div>
      <div className="h-full w-auto absolute top-0 right-0 bg-green-500 z-50 arrow-next">
        <div
          className="relative top-[50%] -rotate-90"
          onClick={increasePosition}
        >
          <Arrow />
        </div>
      </div>
    </div>
  );
};

export default Caroussel;
