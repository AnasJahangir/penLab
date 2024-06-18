import React, { useState } from "react";
import { BsThreeDotsVertical } from "react-icons/bs";
import { FaFilter, FaPlus } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import QuestionListItem from "../Components/QuestionListItem";

function Home() {
  const navigate = useNavigate();
  const questions = [
    { id: 1, text: "Question 1", updated: "2 minutes ago" },
    { id: 2, text: "Question 2", updated: "5 minutes ago" },
    { id: 3, text: "Question 3", updated: "10 minutes ago" },
  ];

  return (
    <div>
      <div className="bg-white text-black mt-[70px] p-2 border-b-[1px]">
        <p>Goal-Question-Indicator (GQI) / GQI Dashboard</p>
      </div>
      <div className="bg-[#F0F0F0]  px-5 py-5 min-h-[100vh]">
        <div className="flex justify-between">
          <button
            onClick={() => navigate("/add-questions")}
            className="bg-[#0277BD] p-2 text-white rounded-md flex justify-center items-center"
          >
            <FaPlus className="me-2" />
            NEW
          </button>
          <div className="flex justify-between items-center">
            <input
              type="text"
              placeholder="Search for Questions"
              name="Search"
              className="w-[490px] p-2 outline-none border-[#D9D9D9] border-[1px] rounded-md"
            />
            <div className="w-[40px] h-[40px] rounded-[50%] bg-[#D9D9D9] flex justify-center items-center ms-5 cursor-pointer">
              <FaFilter className="text-[#0277BD]" />
            </div>
            <div className="w-[40px] h-[40px] rounded-[50%] bg-[#D9D9D9] flex justify-center items-center ms-5 cursor-pointer">
              <BsThreeDotsVertical className="text-[#323232]" />
            </div>
          </div>
        </div>
        <div className="bg-white mt-10 border-[#D9D9D9] border-[1px] rounded-md">
          <div className="flex justify-between items-center p-4 font-[700] border-[#D9D9D9] border-b-[1px]">
            <p>Questions</p> <p>Options</p>
          </div>
          <ul className="p-4 text-black relative">
            {questions.map((question) => (
              <QuestionListItem key={question.id} question={question} />
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Home;
