import React from "react";

function Bullet({ x, y }) {
  return (
    <div
      style={{
        position: "absolute",
        left: x + 20,
        top: y,
        width: 10,
        height: 20,
        backgroundColor: "yellow",
      }}
    />
  );
}

export default Bullet;
