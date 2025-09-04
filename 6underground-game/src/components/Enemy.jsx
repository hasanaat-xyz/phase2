import React from "react";

function Enemy({ x, y }) {
  return (
    <div
      style={{
        position: "absolute",
        left: x,
        top: y,
        width: 50,
        height: 50,
        backgroundColor: "red",
        borderRadius: "5px",
      }}
    />
  );
}

export default Enemy;
