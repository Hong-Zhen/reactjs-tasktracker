import React from "react";

const Button = ({ text }) => {
  const button_handler = () => {
    console.log("clicked button 1");
  };
  return (
    <button onClick={button_handler} className="btn" style={{}}>
      {text}
    </button>
  );
};

Button.defaultProps = {
  text: "Add Button Text",
};

export default Button;
