import React, { useContext } from "react";
import { CiMenuKebab } from "react-icons/ci";
import { MdMonitor } from "react-icons/md";
import { AiOutlineTool } from "react-icons/ai";
import { MdOutlineWarningAmber } from "react-icons/md";
import { MdHistory } from "react-icons/md";

// Components
import StatusLabel from "../StatusLabel";
import { Tab, Tabs } from "../Tabs";

// Pages
import Overview from "../../pages/Dashboard/overview";
import Environment from "../../pages/Dashboard/environment";

// Context
import { Context } from "../../context/Context";
import EmptyView from "../EmptyView";

const Dashboard = () => {
  const { state } = useContext(Context);
  const { application } = state;

  const panes = [
    {
      menuItem: "Overview",
      key: "overview",
      isActive: true,
      icon: <MdMonitor className="text-xl" />,
      render: <Overview />,
    },
    {
      menuItem: "Environment Variables",
      key: "environment-variables",
      icon: <AiOutlineTool className="text-xl" />,
      render: <Environment />,
    },
    {
      menuItem: "Alert",
      key: "alert",
      icon: <MdOutlineWarningAmber className="text-xl" />,
      render: <EmptyView />,
      alert,
    },
    {
      menuItem: "Event History",
      key: "event-history",
      icon: <MdHistory className="text-xl" />,
      render: <EmptyView />,
    },
  ];

  return (
    <div className="py-5">
      {/* Title and Status */}
      <div className="flex justify-between">
        <p className="font-bold text-2xl">{application.name}</p>

        <div className="flex items-center space-x-4">
          <StatusLabel status={application.status} filled />

          <CiMenuKebab className="cursor-pointer" />
        </div>
      </div>

      {/* Menu Items */}
      <Tabs>
        {panes.map((pane) => (
          <Tab
            component={pane.render}
            active={pane.isActive}
            alert={pane.alert}
          >
            <div className="flex items-center space-x-2">
              {pane.icon}
              <p>{pane.menuItem}</p>
            </div>
          </Tab>
        ))}
      </Tabs>
    </div>
  );
};

export default Dashboard;
