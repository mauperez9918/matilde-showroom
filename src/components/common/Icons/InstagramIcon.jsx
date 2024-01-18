import PropTypes from "prop-types";

const InstagramIcon = ({ color }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="48"
      height="48"
      viewBox="0 0 48 48"
      fill="none"
    >
      <path
        d="M31.1898 8.40942H16.8098C12.1698 8.40942 8.40918 12.1708 8.40918 16.8108V31.1894C8.40918 35.8294 12.1705 39.5908 16.8105 39.5908H31.1892C35.8292 39.5908 39.5905 35.8294 39.5905 31.1894V16.8108C39.5905 12.1708 35.8298 8.40942 31.1898 8.40942Z"
        stroke={color}
        strokeWidth="3"
        strokeMiterlimit="10"
      />
      <path
        d="M24.0003 31.5267C28.1572 31.5267 31.527 28.1569 31.527 24.0001C31.527 19.8432 28.1572 16.4734 24.0003 16.4734C19.8434 16.4734 16.4736 19.8432 16.4736 24.0001C16.4736 28.1569 19.8434 31.5267 24.0003 31.5267Z"
        stroke={color}
        strokeWidth="3"
        strokeMiterlimit="10"
      />
      <path
        d="M33.139 16.4736C34.0297 16.4736 34.7517 15.7516 34.7517 14.861C34.7517 13.9703 34.0297 13.2483 33.139 13.2483C32.2484 13.2483 31.5264 13.9703 31.5264 14.861C31.5264 15.7516 32.2484 16.4736 33.139 16.4736Z"
        fill={color}
      />
    </svg>
  );
};

InstagramIcon.propTypes = {
  color: PropTypes.string.isRequired,
};

export default InstagramIcon;
