import React from "react";
import { FaQuestionCircle } from "react-icons/fa";

function StepperQuestion({
  handleNextStep,
  handlePreviousStep,
  question,
  setQuestion,
}) {
  return (
    <div>
      <div className="px-5">
        <p className="text-[#000000B0] mb-2">
          Formulate a <span className="font-bold">Question</span>
        </p>
        <div className="flex justify-between items-center">
          <input
            type="text"
            name="Question"
            value={question}
            onChange={(e) => setQuestion(e.target.value)}
            placeholder="Question"
            className="p-3 w-[100%] border-[#000000B2] border-[1px] rounded-md outline-none"
          />
          <FaQuestionCircle className="ms-4 text-[24px] text-[#000000B2]" />
        </div>
      </div>
      <div className="mt-20 flex justify-between border-t-[1px] px-5 pt-3">
        <button
          onClick={handlePreviousStep}
          className="bg-[#0277BD] p-2 text-white rounded-md flex justify-center items-center"
        >
          BACK
        </button>
        <button
          onClick={handleNextStep}
          className="bg-[#0277BD] p-2 text-white rounded-md flex justify-center items-center"
        >
          NEXT
        </button>
      </div>
    </div>
  );
}

export default StepperQuestion;
