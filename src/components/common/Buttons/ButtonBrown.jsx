import PropTypes from "prop-types";

const ButtonBrown = ({ text }) => {
  return <div className="bg-ms-brown">{text}</div>;
};

ButtonBrown.propTypes = {
  text: PropTypes.string.isRequired,
};

export default ButtonBrown;
