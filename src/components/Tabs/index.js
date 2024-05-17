import React, { useState } from "react";

export function Tabs({ children }) {
  console.log({ children });

  // To find the active tab
  const findActiveTab = (tabs) => tabs.findIndex((tab) => tab.props.active);

  const [activeTab, setActiveTab] = useState(findActiveTab(children));

  return (
    <>
      <div className="flex space-x-10 mt-5 mb-3">
        {children.map((tab, i) => (
          <Tab
            key={`tab-{i}`}
            currentTab={i}
            activeTab={activeTab}
            setActiveTab={setActiveTab}
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

export function Tab({ children, activeTab, currentTab, setActiveTab }) {
  return (
    <>
      <div
        className={`py-3 rounded cursor-pointer
      ${
        activeTab === currentTab ? "font-bold" : "font-semibold text-gray-500"
      }`}
        onClick={() => setActiveTab(currentTab)}
      >
        {children}
      </div>
    </>
  );
}

Tab.displayName = "Tab";
