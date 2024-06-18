import React from "react";
import { FaEye, FaPlus } from "react-icons/fa";

function Indicators({ handlePreviousStep, indicator, setIndicator }) {
  return (
    <div>
      <div className="px-5">
        <p className="text-[#000000B0]">
          Select <span className="font-bold">Indicators</span>
        </p>
        <table className="w-[100%] border ">
          <tr className="font-bold border-b ">
            <td className="px-6 py-3">Indicators</td>
            <td className="px-6 py-3">Indicator Type</td>
            <td className="px-6 py-3">Preview</td>
          </tr>
          <tr className="border-b">
            <td className="px-2 py-3 flex items-center">
              <div className="w-[40px] h-[40px] rounded-[50%] bg-[#D9D9D9] flex justify-center items-center ms-5 cursor-pointer">
                <input
                  id="default-checkbox"
                  type="checkbox"
                  checked={indicator === "Indicator 1" ? true : false}
                  onChange={() => setIndicator("Indicator 1")}
                  class="w-4 h-4 text-blue-[#323232] bg-gray-100 border-gray-300 rounded-lg "
                />
              </div>
              <p className="ms-2">Indicator 1</p>
            </td>
            <td className="px-6 py-3">Basic</td>
            <td className="px-6 py-3">
              <div className="w-[40px] h-[40px] rounded-[50%] bg-[#D9D9D9] flex justify-center items-center ms-5 cursor-pointer">
                <FaEye className="text-[#323232F]" />
              </div>
            </td>
          </tr>
          <tr className="border-b">
            <td className="px-2 py-3 flex items-center">
              <div className="w-[40px] h-[40px] rounded-[50%] bg-[#D9D9D9] flex justify-center items-center ms-5 cursor-pointer">
                <input
                  id="default-checkbox"
                  type="checkbox"
                  class="w-4 h-4 text-blue-[#323232] bg-gray-100 border-gray-300 rounded-lg "
                />
              </div>
              <p className="ms-2">Indicator 2</p>
            </td>
            <td className="px-6 py-3">Composite</td>
            <td className="px-6 py-3">
              <div className="w-[40px] h-[40px] rounded-[50%] bg-[#D9D9D9] flex justify-center items-center ms-5 cursor-pointer">
                <FaEye className="text-[#323232F]" />
              </div>
            </td>
          </tr>
          <tr className="border-b">
            <td className="px-2 py-3 flex items-center">
              <div className="w-[40px] h-[40px] rounded-[50%] bg-[#D9D9D9] flex justify-center items-center ms-5 cursor-pointer">
                <input
                  id="default-checkbox"
                  type="checkbox"
                  class="w-4 h-4 text-blue-[#323232] bg-gray-100 border-gray-300 rounded-lg "
                />
              </div>
              <p className="ms-2">Indicator 3</p>
            </td>
            <td className="px-6 py-3">Multi-level</td>
            <td className="px-6 py-3">
              <div className="w-[40px] h-[40px] rounded-[50%] bg-[#D9D9D9] flex justify-center items-center ms-5 cursor-pointer">
                <FaEye className="text-[#323232F]" />
              </div>
            </td>
          </tr>
        </table>
        <button className="border-[#0277BD] mt-5 border-[1px] p-2 text-[#0277BD] rounded-md flex justify-center items-center">
          <FaPlus className="me-2" />
          CREATE INDICATOR
        </button>
        <div className="mt-20 flex justify-between border-t-[1px] px-5 pt-3">
          <button
            onClick={handlePreviousStep}
            className="bg-[#0277BD] p-2 text-white rounded-md flex justify-center items-center"
          >
            BACK
          </button>
          <button className="bg-[#0277BD] p-2 text-white rounded-md flex justify-center items-center">
            SAVE QUESTION
          </button>
        </div>
      </div>
    </div>
  );
}

export default Indicators;
