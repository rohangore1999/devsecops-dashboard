import React, { useContext, useState } from "react";
import _get from "lodash/get";
import { BsChevronDown, BsChevronUp } from "react-icons/bs";

// Context
import { Context } from "../../context/Context";

// Constants
import { ACTION_TYPES } from "../../reducers/constants";

const Dropdown = ({ options }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState(null);

  const { dispatch } = useContext(Context);

  const handleOptionChange = (id) => {
    const selectedOption = options.find((option) => option.id === id);

    dispatch({ type: ACTION_TYPES.APPLICATION, payload: selectedOption });

    setSelected(selectedOption);
    setIsOpen(false);
  };

  return (
    <>
      <div
        className="flex items-center p-2 pl-0 text-[16px] text-black focus:outline-none cursor-pointer"
        onClick={() => setIsOpen(!isOpen)}
      >
        {_get(selected, "name", options[0]?.name)}
        <span className="pl-2">
          {isOpen ? <BsChevronUp /> : <BsChevronDown />}
        </span>
      </div>

      {isOpen && (
        <ul className="list-none absolute top-20 bg-gray-50 w-40 z-1 shadow-lg z-50">
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
        </ul>
      )}
    </>
  );
};

export default Dropdown;
