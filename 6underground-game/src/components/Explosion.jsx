import React from "react";

function Explosion({ x, y }) {
  return (
    <div
      style={{
        position: "absolute",
        left: x,
        top: y,
        width: 60,
        height: 60,
        backgroundColor: "orange",
        borderRadius: "50%",
        opacity: 0.7,
      }}
    />
  );
}

export default Explosion;
