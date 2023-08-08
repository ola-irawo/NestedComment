import React from "react";

const Button = ({ className, text, handleEvent, type }) => {
  return (
    <button type={type} onClick={handleEvent} className={className}>
      {text}
    </button>
  );
};

export default Button;
