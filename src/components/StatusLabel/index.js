import React from "react";
import { GoDotFill } from "react-icons/go";

const StatusLabel = ({ status, filled = false }) => {
  return (
    <div className="border p-2 py-1 border-green-400 rounded-md">
      <div className="flex items-center space-x-1">
        <GoDotFill className="text-green-500" />

        <p className="text-green-500 font-normal capitalize">{status}</p>
      </div>
    </div>
  );
};

export default StatusLabel;
