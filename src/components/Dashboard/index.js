import React from "react";
import { CiMenuKebab } from "react-icons/ci";
import { MdMonitor } from "react-icons/md";
import { AiOutlineTool } from "react-icons/ai";
import { MdOutlineWarningAmber } from "react-icons/md";
import { MdHistory } from "react-icons/md";
import { BsChevronUp } from "react-icons/bs";

// Components
import StatusLabel from "../StatusLabel";
import Paper from "../Paper";
import { Tab, Tabs } from "../Tabs";

const Dashboard = () => {
  const Tab1Content = () => (
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
  );

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
      <Tabs>
        <Tab component={<Tab1Content />} active>
          <div className="flex items-center space-x-2">
            <MdMonitor className="text-xl" />
            <p>Overview</p>
          </div>
        </Tab>

        <Tab component="content of tab 2">
          <div className="flex items-center space-x-2">
            <AiOutlineTool className="text-xl" />
            <p>Environment Variables</p>
          </div>
        </Tab>

        <Tab component="content of tab 3">
          <div className="flex items-center space-x-2">
            <MdOutlineWarningAmber className="text-xl" />
            <p>Alert</p>
          </div>
        </Tab>

        <Tab component="content of tab 4">
          <div className="flex items-center space-x-2">
            <MdHistory className="text-xl" />
            <p>Event History</p>
          </div>
        </Tab>
      </Tabs>
    </div>
  );
};

export default Dashboard;
