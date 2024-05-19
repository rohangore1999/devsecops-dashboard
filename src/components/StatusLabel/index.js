import React from "react";
import { GoDotFill } from "react-icons/go";

const StatusLabel = ({ status }) => {
  const colorClasses = {
    // Success
    successful: "text-green-500 border-green-400 bg-green-50",
    deployed: "text-green-500 border-green-400 bg-green-50",

    // Warning
    in_progress: "text-yellow-500 border-yellow-400 bg-yellow-50",

    // Error
    failed: "text-red-500 border-red-400 bg-red-50",
    uninstalled: "text-red-500 border-red-400 bg-red-50",
  };

  const classes = colorClasses[status] || "text-gray-500 border-gray-400";

  return (
    <div className={`border p-2 py-1 w-fit rounded-md ${classes}`}>
      <div className="flex items-center space-x-1">
        <GoDotFill className={`${classes.split(" ")[0]}`} />

        <p className={`font-normal capitalize ${classes.split(" ")[0]}`}>
          {status.split("_").join(" ")}
        </p>
      </div>
    </div>
  );
};

export default StatusLabel;
