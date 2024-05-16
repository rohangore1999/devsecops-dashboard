import React from "react";
import Dropdown from "../Dropdown";

const Header = () => {
  return (
    <div className="flex justify-between border-b pb-5">
      <div className="flex flex-col">
        <p className="text-xs font-light text-gray-500">Applications</p>

        <Dropdown name={"tic-tac-toe"} />
      </div>

      <div>
        <Dropdown name={"John Doe"} />
      </div>
    </div>
  );
};

export default Header;
