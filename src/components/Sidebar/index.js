import { useContext, createContext, useState } from "react";
import { MdKeyboardDoubleArrowLeft } from "react-icons/md";

// Images
import klogo from "../../images/logo.png";
import kFulllogo from "../../images/kapstan-full-logo.webp";

const SidebarContext = createContext();

export default function Sidebar({ children }) {
  const [expanded, setExpanded] = useState(true);

  return (
    <aside className="h-[100vh] sticky ">
      <nav className="h-full flex flex-col bg-white border-r shadow-sm ">
        <div className="p-4 flex justify-between items-center">
          {expanded ? (
            <img src={kFulllogo} className={`overflow-hidden  w-32`} alt="" />
          ) : (
            <img src={klogo} className={`overflow-hidden w-[3rem]`} alt="" />
          )}
        </div>

        <SidebarContext.Provider value={{ expanded }}>
          <ul className="flex-1 px-3">{children}</ul>
        </SidebarContext.Provider>

        <div className="border-t flex p-3">
          <button
            onClick={() => setExpanded((curr) => !curr)}
            className="p-1.5 rounded-lg bg-gray-50 hover:bg-gray-100"
          >
            <MdKeyboardDoubleArrowLeft className="text-2xl" />
          </button>
        </div>
      </nav>
    </aside>
  );
}

export function SidebarItem({ icon, text, active, beta }) {
  const { expanded } = useContext(SidebarContext);

  return (
    <li
      className={`
        relative flex items-center py-2 px-3 my-1
        font-medium rounded-md cursor-pointer
        transition-colors group 
        ${
          active
            ? "bg-gradient-to-tr from-indigo-200 to-indigo-100 text-indigo-800"
            : "hover:bg-indigo-50 text-gray-600"
        }
    `}
    >
      {icon}
      <span
        className={`overflow-hidden transition-all ${
          expanded ? "w-52 ml-3" : "w-0"
        }`}
      >
        {text}
      </span>

      {beta && (
        <div
          className={`border -ml-32 rounded-md border-purple-700 bg-purple-700 text-sm text-white py-1 px-3 ${
            !expanded && "hidden"
          }`}
        >
          Beta
        </div>
      )}

      {!expanded && (
        <div
          className={`
          absolute left-full rounded-md px-2 py-1 ml-6
          bg-indigo-100 text-indigo-800 text-sm
          invisible opacity-20 -translate-x-3 transition-all
          group-hover:visible group-hover:opacity-100 group-hover:translate-x-0
      `}
        >
          {text}
        </div>
      )}
    </li>
  );
}
