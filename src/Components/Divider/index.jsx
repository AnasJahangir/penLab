import React from "react";

const Divider = ({ isActive }) => {
  return (
    <div
      className={`flex-1 border-t-2 mx-2 ${
        isActive ? "border-gray-500" : "border-gray-300"
      }`}
    />
  );
};

export default Divider;
