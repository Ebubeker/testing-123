import React from "react";

const Skeleton = ({ width = 200, height = 20, className }) => {
  return (
    <div
      className={`skeleton ${className ?? ""}`}
      style={{
        width: width,
        height: height,
      }}
    />
  );
};

export default Skeleton;
