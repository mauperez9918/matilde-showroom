import PropTypes from "prop-types";
import Button from "./Button";
import InstagramIcon from "../Icons/InstagramIcon";

const InstagramButton = ({
  children = "",
  size,
  color,
  isButton,
  ...props
}) => {
  if (isButton) {
    return (
      <a
        href="https://www.instagram.com/matilde_showroom"
        target="_blank"
        rel="noreferrer"
      >
        <Button
          icon={() => <InstagramIcon size={size} color={color} />}
          {...props}
        >
          {children}
        </Button>
      </a>
    );
  } else {
    return (
      <a
        href="https://www.instagram.com/matilde_showroom"
        target="_blank"
        rel="noreferrer"
      >
        <InstagramIcon size={size} color={color} />
      </a>
    );
  }
};

InstagramButton.propTypes = {
  children: PropTypes.node,
  size: PropTypes.number,
  color: PropTypes.string,
  isButton: PropTypes.bool,
};

export default InstagramButton;
