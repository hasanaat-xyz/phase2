import React from "react";

function Player({ x, y }) {
  return (
    <div
      style={{
        position: "absolute",
        left: x,
        top: y,
        width: 50,
        height: 50,
        backgroundColor: "cyan",
        borderRadius: "5px",
      }}
    />
  );
}

export default Player;
