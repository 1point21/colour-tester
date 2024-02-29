import React from "react";

const Square = ({ colourValue }) => {
  return (
    <section className="sqare" style={{ backgroundColor: colourValue}}>
      <p>{colourValue ? colourValue : "Empty Value"}</p>
    </section>
  );
};

Square.defaultProps = {
  colourValue: "Empty Colour Value",
};

export default Square;
