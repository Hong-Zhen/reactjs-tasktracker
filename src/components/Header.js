import React from "react";
import PropType from "prop-types";
import Button from "./Button";

export const Header = ({ title }) => {
  return (
    <header className="header">
      <h1>{title}</h1>
      <Button text="Add" />
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
