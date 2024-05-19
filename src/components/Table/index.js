import React from "react";

const Table = ({ headings, children }) => {
  return (
    <table className="text-left w-full">
      <thead>
        <tr>
          {headings.map((heading, index) => (
            <th
              key={index}
              className="py-4 px-6 font-sans font-bold uppercase text-sm text-gray-700 border-b border-gray-200"
            >
              {heading}
            </th>
          ))}
        </tr>
      </thead>

      {children}
    </table>
  );
};

export default Table;
