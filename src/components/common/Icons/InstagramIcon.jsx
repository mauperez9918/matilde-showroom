import PropTypes from "prop-types";

const InstagramIcon = ({ color, size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 48 48"
      fill="none"
    >
      <path
        d="M29.235 12H18.3556C14.8452 12 12 14.8457 12 18.3561V29.2345C12 32.7449 14.8457 35.5906 18.3561 35.5906H29.2345C32.7449 35.5906 35.5906 32.7449 35.5906 29.2345V18.3561C35.5906 14.8457 32.7454 12 29.235 12Z"
        stroke={color}
        strokeWidth="2.26968"
        strokeMiterlimit="10"
      />
      <path
        d="M23.794 29.4893C26.9389 29.4893 29.4884 26.9399 29.4884 23.795C29.4884 20.65 26.9389 18.1006 23.794 18.1006C20.6491 18.1006 18.0996 20.65 18.0996 23.795C18.0996 26.9399 20.6491 29.4893 23.794 29.4893Z"
        stroke={color}
        strokeWidth="2.26968"
        strokeMiterlimit="10"
      />
      <path
        d="M30.7103 18.1013C31.3841 18.1013 31.9304 17.555 31.9304 16.8812C31.9304 16.2074 31.3841 15.6611 30.7103 15.6611C30.0365 15.6611 29.4902 16.2074 29.4902 16.8812C29.4902 17.555 30.0365 18.1013 30.7103 18.1013Z"
        fill={color}
      />
    </svg>
  );
};

InstagramIcon.propTypes = {
  color: PropTypes.string.isRequired,
  size: PropTypes.number.isRequired,
};

export default InstagramIcon;
