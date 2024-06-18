import React from "react";

function SelectGoal({ goal, setGoal, handleNextStep }) {
  return (
    <div>
      <div className="px-5">
        <p className="text-[#000000B0]">
          Select <span className="font-bold">Goal</span>
        </p>
        <div className="mt-10 flex justify-between">
          <div
            className={`w-[49%] p-3 ${
              goal === "Monitoring" ? "border-[#0277BD] " : "border-[#D9D9D9]"
            }  border-[1px] rounded-md flex cursor-pointer`}
            onClick={() => setGoal("Monitoring")}
          >
            <div className="h-[100px] w-[100px] border-[#000000B2] border-[1px] rounded-md"></div>
            <div className="text-[#000000B0] ms-4">
              <p className="font-bold">Monitoring</p>
              <p>Description</p>
            </div>
          </div>
          <div
            className={`w-[49%] p-3 ${
              goal === "Assessment" ? "border-[#0277BD] " : "border-[#D9D9D9]"
            }  border-[1px] rounded-md flex cursor-pointer`}
            onClick={() => setGoal("Assessment")}
          >
            <div className="h-[100px] w-[100px] border-[#000000B2] border-[1px] rounded-md"></div>
            <div className="text-[#000000B0] ms-4">
              <p className="font-bold">Assessment</p>
              <p>Description</p>
            </div>
          </div>
        </div>
        <div className="mt-5 flex justify-between">
          <div
            className={`w-[49%] p-3 ${
              goal === "Recommendation"
                ? "border-[#0277BD] "
                : "border-[#D9D9D9]"
            } border-[1px] rounded-md flex cursor-pointer`}
            onClick={() => setGoal("Recommendation")}
          >
            <div className="h-[100px] w-[100px] border-[#000000B2] border-[1px] rounded-md"></div>
            <div className="text-[#000000B0] ms-4">
              <p className="font-bold">Recommendation</p>
              <p>Description</p>
            </div>
          </div>
          <div
            className={`w-[49%] p-3 ${
              goal === "Self-Reflection"
                ? "border-[#0277BD] "
                : "border-[#D9D9D9]"
            } border-[1px] rounded-md flex cursor-pointer`}
            onClick={() => setGoal("Self-Reflection")}
          >
            <div className="h-[100px] w-[100px] border-[#000000B2] border-[1px] rounded-md"></div>
            <div className="text-[#000000B0] ms-4">
              <p className="font-bold">Self-Reflection</p>
              <p>Description</p>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-20 flex justify-end border-t-[1px] px-5 pt-3">
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

export default SelectGoal;
