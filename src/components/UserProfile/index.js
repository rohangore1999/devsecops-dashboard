import React from "react";
import { GoChevronDown } from "react-icons/go";
import { FaRegUser } from "react-icons/fa";

const UserProfile = () => (
  <div className="flex items-center gap-2">
    <FaRegUser />
    <span> John Doe</span> <GoChevronDown className="text-2xl" />
  </div>
);

export default UserProfile;
