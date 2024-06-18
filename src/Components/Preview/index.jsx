import React from "react";
import { IoIosArrowDown } from "react-icons/io";

function Preview({ goal, question, currentStep }) {
  return (
    <div>
      <div className="bg-[white] border-[#D9D9D9] border-[1px]  rounded-md mt-10 min-h-[80vh]">
        <div className="  border-[#D9D9D9] border-b-[1px] p-4 text-[#000000B0]">
          Preview
        </div>
        <div className="px-10 py-3">
          <p className="text-sm">{goal}</p>
          <p className="text-[20px] text-[#000000] ">{question}</p>
          {currentStep === 3 && (
            <div className="w-[400px] h-[617.76px] mt-2 border-[#0000004D] border-[1px] rounded-md bg-[#DFDFDF] flex flex-col justify-between ">
              <div className="bg-white p-4 text-[20px] rounded-t-md">
                Indicator 1
              </div>
              <div className="bg-white p-4  rounded-b-md flex justify-end">
                <p className="text-[#0277BD] font-bold text-[14px] flex items-center cursor-pointer">
                  MORE DETAILS <IoIosArrowDown className="ms-2" />
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Preview;
