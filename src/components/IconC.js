import React from "react";
import "../style/Home.css";

const IconC = (props, { children }) => {
  const { size, padding } = props;

  return (
    <div
      style={{ width: `500px`, height: `500px`, padding }}
      className="icon-c"
    >
      {children}
      ari
    </div>
  );
};

export default IconC;
