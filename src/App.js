import { CgMenuGridR } from "react-icons/cg";
import { TbPlugConnectedX } from "react-icons/tb";
import { MdAttachMoney } from "react-icons/md";
import { MdOutlineSecurity } from "react-icons/md";
import { RiAdminFill } from "react-icons/ri";
import { IoDocumentTextOutline } from "react-icons/io5";

// Components
import Sidebar, { SidebarItem } from "./components/Sidebar";

// Pages
import Applications from "./pages/Applications";

function App() {
  return (
    <div className="flex bg-[#f2f2f2]">
      {/* Sidebar */}
      <Sidebar>
        <SidebarItem
          icon={<CgMenuGridR className="text-2xl" />}
          text="Application"
          active
        />

        {/* Divider */}
        <SidebarItem
          icon={<TbPlugConnectedX className="text-2xl" />}
          text="Connections"
        />
        <SidebarItem
          icon={<MdAttachMoney className="text-2xl" />}
          text="Cost"
        />
        <SidebarItem
          icon={<MdOutlineSecurity className="text-2xl" />}
          text="Security"
        />

        {/* Divider */}
        <SidebarItem icon={<RiAdminFill className="text-2xl" />} text="Admin" />
        <SidebarItem
          icon={<IoDocumentTextOutline className="text-2xl" />}
          text="Docs"
        />
      </Sidebar>

      {/* Main Container */}
      <Applications />
    </div>
  );
}

export default App;
