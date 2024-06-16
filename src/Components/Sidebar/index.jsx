import React, { useEffect, useRef, useState } from "react";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";

function Sidebar({ openSidebar }) {
  const [openSections, setOpenSections] = useState([true, true, true, true]); // Initial state: all sections open
  const sectionRefs = [useRef(null), useRef(null), useRef(null), useRef(null)];

  useEffect(() => {
    sectionRefs.forEach((ref, index) => {
      if (openSections[index]) {
        ref.current.style.maxHeight = `${ref.current.scrollHeight}px`;
      } else {
        ref.current.style.maxHeight = "0px";
      }
    });
  }, [openSections]);

  const toggleSection = (index) => {
    setOpenSections((prevState) => {
      const newState = [...prevState];
      newState[index] = !newState[index];
      return newState;
    });
  };

  return (
    <aside
      id="logo-sidebar"
      className={`fixed top-0 left-0 z-40 w-64 h-screen pt-20 transition-transform ${
        openSidebar ? "transform-none" : "-translate-x-full"
      } bg-white border-r border-gray-200 sm:translate-x-0 `}
      aria-label="Sidebar"
    >
      <div className="h-full px-3 pb-4 overflow-y-auto text-[#000000B0]">
        <div>
          <div className="mt-10">
            <p className="font-medium flex justify-between items-center">
              Indicator Specification <br /> Cards (ISC)
              {openSections[0] ? (
                <IoIosArrowUp
                  className="text-[15px] ms-4 cursor-pointer"
                  onClick={() => toggleSection(0)}
                />
              ) : (
                <IoIosArrowDown
                  className="text-[15px] ms-4 cursor-pointer"
                  onClick={() => toggleSection(0)}
                />
              )}
            </p>
            <div
              ref={sectionRefs[0]}
              className="transition-max-height duration-300 ease-in-out overflow-hidden"
            >
              <ul className="text-[14px] mt-5 mx-auto ps-10">
                <li className="mt-5">
                  <div className="font-medium">ISC Dashboard</div>
                  <div className="mt-1 text-[#00000080]">List of my ISCs</div>
                </li>
                <li className="mt-5">
                  <div className="font-medium">ISC Creator</div>
                  <div className="mt-1 text-[#00000080]">
                    Create or edit an ISC
                  </div>
                </li>
                <li className="mt-5">
                  <div className="font-medium">ISC Pool</div>
                  <div className="mt-1 text-[#00000080]">Search for ISCs</div>
                </li>
              </ul>
            </div>
          </div>
          <div className="mt-10">
            <p className="font-medium flex justify-between items-center">
              Goal-Question-Indicator (GQI)
              {openSections[1] ? (
                <IoIosArrowUp
                  className="text-[15px] ms-4 cursor-pointer"
                  onClick={() => toggleSection(1)}
                />
              ) : (
                <IoIosArrowDown
                  className="text-[15px] ms-4 cursor-pointer"
                  onClick={() => toggleSection(1)}
                />
              )}
            </p>
            <div
              ref={sectionRefs[1]}
              className="transition-max-height duration-300 ease-in-out overflow-hidden"
            >
              <ul className="text-[14px] mt-5 mx-auto ps-10">
                <li className="mt-5 bg-[#EEF8FF78]">
                  <div className="font-medium text-[#00000093]">
                    GQI Dashboard
                  </div>
                  <div className="mt-1 text-[#00000080]">List of my GQIs</div>
                </li>
                <li className="mt-5">
                  <div className="font-medium">GQI Editor</div>
                  <div className="mt-1 text-[#00000080]">
                    Create or edit a GQI
                  </div>
                </li>
                <li className="mt-5">
                  <div className="font-medium">GQI Pool</div>
                  <div className="mt-1 text-[#00000080]">Search for GQIs</div>
                </li>
              </ul>
            </div>
          </div>
          <div className="mt-10">
            <p className="flex font-medium justify-between items-center">
              Indicators
              {openSections[2] ? (
                <IoIosArrowUp
                  className="text-[15px] ms-4 cursor-pointer"
                  onClick={() => toggleSection(2)}
                />
              ) : (
                <IoIosArrowDown
                  className="text-[15px] ms-4 cursor-pointer"
                  onClick={() => toggleSection(2)}
                />
              )}
            </p>
            <div
              ref={sectionRefs[2]}
              className="transition-max-height duration-300 ease-in-out overflow-hidden"
            >
              <ul className="text-[14px] mt-5 mx-auto ps-10">
                <li className="mt-5 ">
                  <div className="font-medium">My Indicator Dashboard</div>
                  <div className="mt-1 text-[#00000080]">
                    List of my Indicators
                  </div>
                </li>
                <li className="mt-5">
                  <div className="font-medium">Indicator Editor</div>
                  <div className="mt-1 text-[#00000080]">
                    Create or edit an Indicator
                  </div>
                </li>
                <li className="mt-5">
                  <div className="font-medium">Indicator Pool</div>
                  <div className="mt-1 text-[#00000080]">
                    Search for Indicators
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <div className="mt-10">
            <p className="flex font-medium justify-between items-center">
              Tools
              {openSections[3] ? (
                <IoIosArrowUp
                  className="text-[15px] ms-4 cursor-pointer"
                  onClick={() => toggleSection(3)}
                />
              ) : (
                <IoIosArrowDown
                  className="text-[15px] ms-4 cursor-pointer"
                  onClick={() => toggleSection(3)}
                />
              )}
            </p>
            <div
              ref={sectionRefs[3]}
              className="transition-max-height duration-300 ease-in-out overflow-hidden"
            >
              <ul className="text-[14px] mt-5 mx-auto ps-10">
                <li className="mt-5 ">
                  <div className="font-medium">CSV-xAPI Converter</div>
                  <div className="mt-1 text-[#00000080]">
                    Convert CSV to xAPI data and vice versa
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </aside>
  );
}

export default Sidebar;
