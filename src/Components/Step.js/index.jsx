import React from "react";

const Step = ({ stepNumber, label, isActive, isCompleted, color }) => {
  return (
    <div className="flex items-center">
      <div
        className={`flex justify-center items-center w-6 h-6 rounded-full text-white font-bold ${
          isActive ? color : "bg-gray-300"
        } ${isCompleted ? "opacity-100" : "opacity-70"}`}
      >
        {stepNumber}
      </div>
      <div className="ml-2 text-sm text-[#000000A1] font-[700]">{label}</div>
    </div>
  );
};

export default Step;
