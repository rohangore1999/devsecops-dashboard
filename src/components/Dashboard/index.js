import React from "react";
import { CiMenuKebab } from "react-icons/ci";
import { MdMonitor } from "react-icons/md";
import { AiOutlineTool } from "react-icons/ai";
import { CiWarning } from "react-icons/ci";
import { FaHistory } from "react-icons/fa";
import { BsChevronUp } from "react-icons/bs";

// Components
import StatusLabel from "../StatusLabel";
import Paper from "../Paper";

const Dashboard = () => {
  return (
    <div className="py-5">
      {/* Title and Status */}
      <div className="flex justify-between">
        <p className="font-bold text-2xl">tic-tac-toe</p>

        <div className="flex items-center space-x-4">
          <StatusLabel status="deployed" filled />
          <CiMenuKebab className="cursor-pointer" />
        </div>
      </div>

      {/* Menu Items */}
      <div className="flex space-x-10 mt-5 mb-3">
        <div className="flex items-center space-x-2">
          <MdMonitor className="text-xl" />
          <p>Overview</p>
        </div>

        <div className="flex items-center space-x-2">
          <AiOutlineTool className="text-xl" />
          <p>Environment Variables</p>
        </div>

        <div className="flex items-center space-x-2">
          <CiWarning className="text-xl" />
          <p>Alert</p>
        </div>

        <div className="flex items-center space-x-2">
          <FaHistory className="text-xl" />
          <p>Event History</p>
        </div>
      </div>

      {/* Details */}
      <Paper>
        <div className="flex justify-between items-center">
          <p className="text-gray-500 font-bold">Service Info</p>

          <BsChevronUp />
        </div>

        <div className="flex space-x-36">
          <div className="flex flex-col">
            <p>Current version</p>
            <p>In Sync</p>
          </div>

          <div className="flex flex-col">
            <p>Desired version</p>
            <p>1.2.1</p>
          </div>
        </div>

        <button className="border bg-purple-700 text-white px-7 py-2 rounded-md text-sm">
          Deploy
        </button>
      </Paper>
    </div>
  );
};

export default Dashboard;
