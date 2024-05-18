import React, { useEffect, useRef, useState } from "react";
import _get from "lodash/get";
import { BsChevronDown, BsChevronUp } from "react-icons/bs";

const Dropdown = ({ options }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState(null);

  const dropdownRef = useRef(null);

  const handleOptionChange = (id) => {
    setSelected(options.find((option) => option.id === id));
    setIsOpen(false);
  };

  return (
    <>
      <div
        ref={dropdownRef}
        className="flex items-center p-2 pl-0 text-[16px] text-black focus:outline-none cursor-pointer"
        onClick={() => setIsOpen(!isOpen)}
      >
        {_get(selected, "name", options[0]?.name)}{" "}
        <span className="pl-2">
          {isOpen ? <BsChevronUp /> : <BsChevronDown />}
        </span>
      </div>

      {isOpen && (
        <ul className="list-none absolute top-20 bg-gray-50 w-40 z-1 shadow-lg">
          {options.map((option) => (
            <li
              className={`py-3 px-4 cursor-pointer hover:bg-gray-200 hover:text-gray-400 ${
                option.id === selected?.id && "bg-gray-200"
              }`}
              onClick={() => handleOptionChange(option.id)}
            >
              {option.name}
            </li>
          ))}

          {/* <li className="py-3 px-4 cursor-pointer hover:bg-gray-200 hover:text-gray-400">
            Option 2
          </li>
          <li className="py-3 px-4 cursor-pointer hover:bg-gray-200 hover:text-gray-400">
            Option 3
          </li> */}
        </ul>
      )}
    </>
  );
};

export default Dropdown;
