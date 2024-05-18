import React from "react";
import Dropdown from "../Dropdown";

const Header = ({ applications }) => {
  return (
    <div className="flex justify-between border-b pb-5">
      <div className="flex flex-col">
        <p className="text-xs font-light text-gray-500">Applications</p>

        <Dropdown options={applications} />
      </div>

      <div>
        {/* <Dropdown /> */}
      </div>
    </div>
  );
};

export default Header;
