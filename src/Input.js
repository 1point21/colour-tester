import React from "react";
import colorNames from "colornames";

const Input = ({ colourValue, setColourValue, setHexValue }) => {
  return (
    <form onSubmit={(e) => e.preventDefault()}>
      <label>Add Colour Name:</label>
      <input
        type="text"
        autoFocus
        placeholder="Add colour name"
        required
        value={colourValue}
        onChange={(e) => {
          setColourValue(e.target.value);
          setHexValue(colorNames(e.target.value));
        }}
      />
    </form>
  );
};

export default Input;
