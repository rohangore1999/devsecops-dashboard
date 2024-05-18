import React from "react";
import { IoMdClose } from "react-icons/io";

const Drawer = ({ isOpen, onClose, children }) => {
  return (
    <>
      {isOpen && (
        <div className="fixed inset-0 ease-in-out duration-500 bg-black opacity-50" />
      )}

      <div
        className={`fixed inset-0 z-50 duration-700 ease-in-out transition transform 
        ${isOpen ? "translate-x-0" : "translate-x-full"}
        `}
      >
        <div className="w-1/2 fixed right-0 top-0 h-full bg-white shadow-2xl p-4 border-l-0">
          <button className="absolute right-5" onClick={onClose}>
            <IoMdClose className="text-2xl" />
          </button>

          <div className="mt-4">
            {children}
          </div>
        </div>
      </div>
    </>
  );
};

export default Drawer;
