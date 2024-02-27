import PropTypes from "prop-types";
import Button from "./Button";
import WhatsappIcon from "../Icons/WhatsappIcon";

const WhatsappButton = ({ children = "", size, color, isButton, ...props }) => {
  if (isButton) {
    return (
      <a href="https://wa.me/543512836753">
        <Button
          icon={() => <WhatsappIcon size={size} color={color} />}
          {...props}
        >
          {children}
        </Button>
      </a>
    );
  } else {
    return (
      <a href="https://wa.me/543512836753">
        <WhatsappIcon size={size} color={color} />
      </a>
    );
  }
};

WhatsappButton.propTypes = {
  children: PropTypes.node,
  size: PropTypes.number,
  color: PropTypes.string,
  isButton: PropTypes.bool,
};

export default WhatsappButton;
