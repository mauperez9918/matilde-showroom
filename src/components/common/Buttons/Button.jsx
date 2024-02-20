import PropTypes from "prop-types";

const Button = ({ icon: Icon, text, isBrown, isBlack }) => {
  return (
    <button
      className={`w-36 h-12 text-sm flex justify-evenly pr-4 pl-2 items-center rounded-lg shadow-md ${
        isBrown ? "bg-ms-creme" : ""
      }
      ${isBlack ? "bg-black text-white" : ""}`}
    >
      <div>
        <Icon />
      </div>
      <p>{text}</p>
    </button>
  );
};

Button.propTypes = {
  icon: PropTypes.func,
  text: PropTypes.string,
  isBrown: PropTypes.bool,
  isBlack: PropTypes.bool,
};

export default Button;
