import React from "react";
import { GoDotFill } from "react-icons/go";

const StatusLabel = ({ status }) => {
  const colorClasses = {
    deployed: "text-green-500 border-green-400",
    pending: "text-yellow-500 border-yellow-400",
    failed: "text-red-500 border-red-400",
  };

  const classes = colorClasses[status] || "text-gray-500 border-gray-400";

  return (
    <div className={`border p-2 py-1 rounded-md ${classes}`}>
      <div className="flex items-center space-x-1">
        <GoDotFill className={`${classes.split(" ")[0]}`} />
        <p className={`font-normal capitalize ${classes.split(" ")[0]}`}>
          {status}
        </p>
      </div>
    </div>
  );
};

export default StatusLabel;
