import PropTypes from "prop-types";

const Button = ({ icon: Icon, children, className = "", ...args }) => {
  const isBlack = className.includes("isBlack");
  console.log('isBlack', isBlack)

  return (
    <button
      className={`w-36 h-12 text-sm flex justify-evenly pr-4 pl-2 items-center rounded-lg shadow-md
      ${isBlack ? "bg-black text-white" : "bg-ms-creme text-black"}
      `}
      {...args}
    >
      <div>
        <Icon />
      </div>
      {children}
    </button>
  );
};

Button.propTypes = {
  icon: PropTypes.func,
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

export default Button;
