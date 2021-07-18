import React from "react";
import PropType from "prop-types";

const Button = ({ text, onClick, color }) => {
  return (
    <button
      style={{ backgroundColor: color }}
      onClick={onClick}
      className="btn"
    >
      {text}
    </button>
  );
};

Button.defaultProps = {
  text: "Add Button Text",
};

Button.PropType = {
  onClick: PropType.func.isRequired,
};

export default Button;
