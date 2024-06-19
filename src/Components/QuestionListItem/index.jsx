import React, { useState } from "react";
import { BsThreeDotsVertical } from "react-icons/bs";
import { FaEye, FaBookmark, FaEdit, FaCode } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const QuestionListItem = ({ question }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const navigate = useNavigate();

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <div className="relative">
      <li className="flex justify-between items-center mb-4">
        <div className="cursor-pointer" onClick={() => navigate("/questions")}>
          <p className="text-[20px]">{question.text}</p>
          <p className="italic">Last updated: {question.updated}</p>
        </div>
        <div>
          <div
            onClick={toggleModal}
            className="w-[40px] h-[40px] rounded-[50%] bg-[#3232320A] flex justify-center items-center ms-5 cursor-pointer"
          >
            <BsThreeDotsVertical className="text-[#000000B2]" />
          </div>
        </div>
      </li>

      {isModalOpen && (
        <div className="absolute text-[#0277BD] text-[14px] font-[700] mt-2 w-[300px] bg-white border rounded shadow-lg right-0 z-10">
          <ul>
            <li
              className="flex items-center p-2 hover:bg-gray-100 cursor-pointer"
              onClick={() =>
                navigate("/add-questions", { state: { id: question.id } })
              }
            >
              <FaEye className="mr-2" /> Preview Question
            </li>
            <li className="flex items-center p-2 hover:bg-gray-100 cursor-pointer">
              <FaBookmark className="mr-2" /> Save Question to My Dashboard
            </li>
            <li className="flex items-center p-2 hover:bg-gray-100 cursor-pointer">
              <FaEdit className="mr-2" /> Edit Question
            </li>
            <li className="flex items-center p-2 hover:bg-gray-100 cursor-pointer">
              <FaCode className="mr-2" /> Copy Question Code
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default QuestionListItem;
