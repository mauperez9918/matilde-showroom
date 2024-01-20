import PropTypes from "prop-types";

const ButtonBrown = ({ icon, text }) => {
  return (
    <div className="w-36 h-12 text-xs flex justify-evenly pr-4 pl-2 items-center bg-ms-creme rounded-lg shadow-md">
      <div>{icon}</div>
      <div>{text}</div>
    </div>
  );
};

ButtonBrown.propTypes = {
  icon: PropTypes.object.isRequired,
  text: PropTypes.string.isRequired,
};

export default ButtonBrown;
