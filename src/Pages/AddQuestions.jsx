import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Stepper from "../Components/Stepper";
import SelectGoal from "../Components/SelectGoal";
import Preview from "../Components/Preview";
import StepperQuestion from "../Components/StepperQuestion";
import Indicators from "../Components/Indicators";

function AddQuestions() {
  const navigate = useNavigate();
  const [currentStep, setCurrentStep] = useState(1);
  const [goal, setGoal] = useState("Monitoring");
  const [question, setQuestion] = useState("");
  const [indicator, setIndicator] = useState("Indicator 1");

  console.log(goal);
  const handleNextStep = () => {
    setCurrentStep((prevStep) => (prevStep < 3 ? prevStep + 1 : prevStep));
  };

  const handlePreviousStep = () => {
    setCurrentStep((prevStep) => (prevStep > 1 ? prevStep - 1 : prevStep));
  };

  return (
    <div>
      <div className="bg-white text-black mt-[70px] p-2 border-b-[1px]">
        <p>Goal-Question-Indicator (GQI) / GQI Editor</p>
      </div>
      <div className="bg-[#F0F0F0] flex justify-center px-5  py-5">
        <div className=" w-[90%] ">
          <div className="bg-white  border-[#D9D9D9] border-[1px] rounded-md">
            <Stepper currentStep={currentStep} />
            <div className="py-3 mt-4">
              {currentStep === 1 && (
                <div>
                  <SelectGoal
                    goal={goal}
                    setGoal={setGoal}
                    handleNextStep={handleNextStep}
                  />
                </div>
              )}
              {currentStep === 2 && (
                <div>
                  <StepperQuestion
                    setQuestion={setQuestion}
                    question={question}
                    handleNextStep={handleNextStep}
                    handlePreviousStep={handlePreviousStep}
                  />
                </div>
              )}
              {currentStep === 3 && (
                <div>
                  <Indicators
                    handleNextStep={handleNextStep}
                    handlePreviousStep={handlePreviousStep}
                    indicator={indicator}
                    setiIndicator={setIndicator}
                  />
                </div>
              )}
            </div>
          </div>
          <Preview goal={goal} question={question} currentStep={currentStep}/>
        </div>
      </div>
    </div>
  );
}

export default AddQuestions;
