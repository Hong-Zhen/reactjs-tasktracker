import React from "react";
import PropType from "prop-types";

const Button = ({ text, button_handler }) => {
  return (
    <button onClick={button_handler} className="btn" style={{}}>
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
