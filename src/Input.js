import React from "react";

const Input = ({ colourValue, setColourValue }) => {
  return (
    <form onSubmit={(e) => e.preventDefault()}>
      <label>Add Colour Name:</label>
      <input
        type="text"
        autoFocus
        placeholder="Add colour name"
        required
        value={colourValue}
        onChange={(e) => setColourValue(e.target.value)}
      />
    </form>
  );
};

export default Input;
