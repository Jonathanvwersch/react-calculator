import React, { useState } from "react";
import "./App.css";

const Button = ({ name, onButtonClick, type }) => {
  return (
    <button
      onClick={onButtonClick(name)}
      className={`Button ${name === "0" ? "zero" : ""} ${type || ""}`}
      type={type}
    >
      {name}
    </button>
  );
};

export default Button;
