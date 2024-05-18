import React from "react";
import { BsChevronUp } from "react-icons/bs";

// Components
import Paper from "../../components/Paper";
import Table from "../../components/Table";
import { Tab, Tabs } from "../../components/Tabs";

// Consants
import { body, headings, panes } from "./constants";

const Overview = () => {
  return (
    <div className="space-y-5">
      <Paper>
        <div className="flex justify-between items-center">
          <p className="text-gray-500 font-bold">Service Info</p>

          <BsChevronUp />
        </div>

        <div className="flex space-x-36">
          <div className="flex flex-col">
            <p>Current version</p>
            <p>In Sync</p>
          </div>

          <div className="flex flex-col">
            <p>Desired version</p>
            <p>1.2.1</p>
          </div>
        </div>

        <div className="flex items-center justify-between text-gray-500 pt-5">
          <button className="border bg-purple-700 text-white px-7 py-2 rounded-md text-sm">
            Deploy
          </button>

          <p>Last updated 5 hours ago</p>
        </div>
      </Paper>

      <div className="flex gap-4">
        <Paper width="w-1/2">
          <div>System metrics</div>

          <Tabs>
            {panes.map((pane) => (
              <Tab component={pane.render} active={pane.isActive}>
                <p>{pane.menuItem}</p>
              </Tab>
            ))}
          </Tabs>
        </Paper>

        <Paper width="w-1/2">
          <div>Event History</div>

          <Table headings={headings} body={body} />
        </Paper>
      </div>
    </div>
  );
};

export default Overview;
