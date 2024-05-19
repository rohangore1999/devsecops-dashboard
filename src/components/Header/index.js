import React from "react";

// Components
import Dropdown from "../Dropdown";
import UserProfile from "../UserProfile";

const Header = ({ applications }) => {
  return (
    <div className="flex justify-between items-center border-b pb-2">
      <div className="flex flex-col">
        <p className="text-xs font-light text-gray-500">Applications</p>

        <Dropdown options={applications} />
      </div>

      <div>
        <UserProfile />
      </div>
    </div>
  );
};

export default Header;
