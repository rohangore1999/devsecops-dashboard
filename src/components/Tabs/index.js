import React, { useState } from "react";

export function Tabs({ children, secondary = false }) {
  // To find the active tab
  const findActiveTab = (tabs) => tabs.findIndex((tab) => tab.props.active);

  const [activeTab, setActiveTab] = useState(findActiveTab(children));

  return (
    <>
      <div className={`flex space-x-10 mt-5 mb-3 ${secondary && "border-b-2"}`}>
        {children.map((tab, i) => (
          <Tab
            key={`tab-{i}`}
            currentTab={i}
            activeTab={activeTab}
            setActiveTab={setActiveTab}
            secondary={secondary}
          >
            {tab.props.children}
          </Tab>
        ))}
      </div>

      <div>
        {children.map((tab, i) => {
          return (
            <div className={` ${i === activeTab ? "visible" : "hidden"}`}>
              {tab.props.component}
            </div>
          );
        })}
      </div>
    </>
  );
}

export function Tab({
  children,
  activeTab,
  currentTab,
  setActiveTab,
  secondary,
}) {
  return (
    <>
      <div
        className={`${
          secondary && "w-full"
        } text-center relative py-3 rounded cursor-pointer 
      ${
        activeTab === currentTab ? "font-bold " : "font-semibold text-gray-500"
      }`}
        onClick={() => setActiveTab(currentTab)}
      >
        {secondary && (
          <div
            className={`absolute ${
              activeTab === currentTab &&
              "border-black border-2 w-full bottom-[-0.5px]"
            }  `}
          />
        )}

        {children}
      </div>
    </>
  );
}

Tab.displayName = "Tab";
