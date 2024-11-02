// Button.js
import React from "react";

const Button = ({
  label,
  onClick,
  type = "button",
  disabled = false,
  style = {},
}) => {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      style={{
        padding: "10px 20px",
        backgroundColor: disabled ? "#ccc" : "#007bff",
        color: "#fff",
        border: "none",
        borderRadius: "5px",
        cursor: disabled ? "not-allowed" : "pointer",
        ...style,
      }}
    >
      {label}
    </button>
  );
};

export default Button;
