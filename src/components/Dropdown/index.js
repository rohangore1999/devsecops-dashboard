import React, { useState } from "react";
import { BsChevronDown, BsChevronUp } from "react-icons/bs";
import { TbCircleLetterJ } from "react-icons/tb";

const Dropdown = ({ name }) => {
  const [isOpen, setisOpen] = useState(false);
  const [selected, setSelected] = useState({});

  return (
    <>
      <div
        className="flex items-center p-2 pl-0 text-[16px] text-black focus:outline-none cursor-pointer"
        onClick={() => setisOpen(!isOpen)}
      >
        {name}{" "}
        <span className="pl-2">
          {isOpen ? <BsChevronUp /> : <BsChevronDown />}
        </span>
      </div>

      {isOpen && (
        <ul className="list-none absolute top-20 bg-gray-50 w-40 z-1 shadow-lg">
          <li className="py-3 px-4 cursor-pointer hover:bg-gray-200 hover:text-gray-400">
            Option 1
          </li>
          <li className="py-3 px-4 cursor-pointer hover:bg-gray-200 hover:text-gray-400">
            Option 2
          </li>
          <li className="py-3 px-4 cursor-pointer hover:bg-gray-200 hover:text-gray-400">
            Option 3
          </li>
        </ul>
      )}
    </>
  );
};

export default Dropdown;
