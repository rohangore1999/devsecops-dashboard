import React from "react";

const Paper = ({ children, width }) => {
  return (
    <div className={`bg-white border p-5 rounded-md space-y-5 ${width}`}>
      {children}
    </div>
  );
};

export default Paper;
