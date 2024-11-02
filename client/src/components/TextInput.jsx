// TextInput.jsx
import React from "react";

const TextInput = ({
  placeholder,
  value,
  onChange,
  type = "text",
  style = {},
}) => {
  return (
    <input
      type={type}
      value={value}
      onChange={(e) => onChange(e.target.value)}
      placeholder={placeholder}
      style={{
        padding: "10px",
        border: "1px solid #ccc",
        borderRadius: "4px",
        width: "100%",
        ...style,
      }}
    />
  );
};

export default TextInput;
