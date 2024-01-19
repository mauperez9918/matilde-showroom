import PropTypes from "prop-types";

const ButtonBrown = ({ icon, text }) => {
  console.log("icon", icon);

  return (
    <div className="p-3 flex items-center justify-between rounded-lg bg-ms-creme">
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
