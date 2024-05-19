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

// Providers
import { Provider } from "./context/Context";
import Divider from "./components/Divider";

function App() {
  return (
    <Provider>
      <div className="flex bg-[#f2f2f2] ">
        {/* Sidebar */}
        <Sidebar>
          <div className="flex flex-col h-full justify-between">
            <div className="space-y-5">
              <SidebarItem
                icon={<CgMenuGridR className="text-2xl" />}
                text="Application"
                active
              />

              <Divider />

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
                beta
              />

              <Divider />
            </div>

            <div className="space-y-5 pb-5">
              <SidebarItem
                icon={<RiAdminFill className="text-2xl" />}
                text="Admin"
              />

              <SidebarItem
                icon={<IoDocumentTextOutline className="text-2xl" />}
                text="Docs"
              />
            </div>
          </div>
        </Sidebar>

        {/* Main Container */}
        <Applications />
      </div>
    </Provider>
  );
}

export default App;
