import React from "react";
import { IoIosArrowBack, IoIosArrowDown } from "react-icons/io";
import { MdContentCopy, MdEdit } from "react-icons/md";
import { useNavigate } from "react-router-dom";

function Questions() {
  const navigate = useNavigate();

  return (
    <div>
      <div className="bg-white text-black mt-[70px] p-2 border-b-[1px]">
        <p>Goal-Question-Indicator (GQI) / GQI Dashboard</p>
      </div>
      <div className="bg-[#F0F0F0]  px-5 py-5 min-h-[100vh]">
        <div className="flex justify-between items-center">
          <button
            onClick={() => navigate("/")}
            className="border-[#0277BD] text-sm font-bold mt-5 border-[1px] p-2 text-[#0277BD] rounded-md flex justify-center items-center"
          >
            <IoIosArrowBack className="me-2" />
            BACK
          </button>
          <div className="flex ">
            <button className="bg-[#0277BD] px-2 text-sm h-12 font-bold text-white rounded-md flex justify-center items-center">
              <MdEdit className="me-2" />
              EDIT QUESTION
            </button>
            <button className="bg-[#0277BD] p-2  h-12 text-sm font-bold ms-3 text-white rounded-md flex justify-center items-center">
              <MdContentCopy className="me-2" />
              COPY QUESTION CODE
            </button>
          </div>
        </div>
        <div className="mt-10">
          <p className="text-sm">Question 1</p>
          <p className="text-[20px] text-[#000000] ">Monitoring</p>
          <div className="flex">
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
            <div className="ms-5 w-[400px] h-[617.76px] mt-2 border-[#0000004D] border-[1px] rounded-md bg-[#DFDFDF] flex flex-col justify-between ">
              <div className="bg-white p-4 text-[20px] rounded-t-md">
                Indicator 1
              </div>
              <div className="bg-white p-4  rounded-b-md flex justify-end">
                <p className="text-[#0277BD] font-bold text-[14px] flex items-center cursor-pointer">
                  MORE DETAILS <IoIosArrowDown className="ms-2" />
                </p>
              </div>
            </div>
          </div>
          <div className="mt-5 w-[400px] h-[617.76px]  border-[#0000004D] border-[1px] rounded-md bg-[#DFDFDF] flex flex-col justify-between ">
            <div className="bg-white p-4 text-[20px] rounded-t-md">
              Indicator 1
            </div>
            <div className="bg-white p-4  rounded-b-md flex justify-end">
              <p className="text-[#0277BD] font-bold text-[14px] flex items-center cursor-pointer">
                MORE DETAILS <IoIosArrowDown className="ms-2" />
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Questions;
