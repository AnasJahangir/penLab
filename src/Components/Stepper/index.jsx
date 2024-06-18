import React from "react";
import Step from "../Step.js";
import Divider from "../Divider/index.jsx";

const Stepper = ({ currentStep }) => {
  return (
    <div className="flex justify-between items-center w-full border-b-[1px] p-3 px-5">
      <Step
        stepNumber={1}
        label="Goal"
        isActive={currentStep >= 1}
        isCompleted={currentStep > 1}
        color="bg-purple-600"
      />
      <Divider isActive={currentStep >= 2} />
      <Step
        stepNumber={2}
        label="Question"
        isActive={currentStep >= 2}
        isCompleted={currentStep > 2}
        color="bg-blue-500"
      />
      <Divider isActive={currentStep >= 3} />
      <Step
        stepNumber={3}
        label="Indicators"
        isActive={currentStep >= 3}
        isCompleted={currentStep > 3}
        color="bg-green-500"
      />
    </div>
  );
};

export default Stepper;
