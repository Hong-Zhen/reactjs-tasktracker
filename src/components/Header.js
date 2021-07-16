import React from "react";
import PropType from "prop-types";
import Button from "./Button";

export const Header = ({ title }) => {
  const button_handler = () => {
    console.log("clicked button 1");
  };

  return (
    <header className="header">
      <h1>{title}</h1>
      <Button text="Add" onClick={button_handler} />
    </header>
  );
};

Header.defaultProps = {
  title: "Header Text Place Holder",
};

Header.PropType = {
  title: PropType.string.isRequired,
};

export default Header;
