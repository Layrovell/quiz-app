import React from "react";

export const Input = (props) => {
  const { label, value, help, type, action } = props;

  return (
    <>
      <label>
        {label}
        <input
          value={value}
          onChange={action}
          type={type}
          placeholder={help}
        />
      </label>
    </>
  );
};
