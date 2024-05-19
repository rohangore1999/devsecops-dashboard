import React, { useContext, useEffect, useState } from "react";
import { BsChevronUp } from "react-icons/bs";
import { SiTicktick } from "react-icons/si";

// Components
import Paper from "../../components/Paper";
import Table from "../../components/Table";
import { Tab, Tabs } from "../../components/Tabs";
import StatusLabel from "../../components/StatusLabel";
import Charts from "../../components/Charts";

// Consants
import { headings } from "./constants";

// Context
import { Context } from "../../context/Context";

// Utils
import { convertTimestampToRelativeTime } from "../../utils/common";

// Services
import {
  getCpuUtilization,
  getEventHistory,
  getMemoryUtilization,
} from "../../services/applications";

// Helpers
import { getChartOptions } from "./helpers";

const Overview = () => {
  const [eventHistoryData, setEventHistoryData] = useState([]);
  const [memoryUtilizationData, setMemoryUtilizationData] = useState([]);
  const [CpuUtilizationData, setCpuUtilizationData] = useState([]);

  const { state } = useContext(Context);
  const { applications } = state;

  useEffect(() => {
    (async () => {
      const [
        eventHistoryResponse,
        memoryUtilizationResponse,
        cpuUtilizationResponse,
      ] = await Promise.all([
        getEventHistory(applications.id),
        getMemoryUtilization(applications.id),
        getCpuUtilization(applications.id),
      ]);

      setEventHistoryData(eventHistoryResponse);
      setMemoryUtilizationData(memoryUtilizationResponse);
      setCpuUtilizationData(cpuUtilizationResponse);
    })();
  }, [applications]);

  const memoryOptions = getChartOptions(
    memoryUtilizationData,
    "Memory Utilization",
    "memoryUtilization"
  );
  const cpuOptions = getChartOptions(
    CpuUtilizationData,
    "CPU Utilization",
    "cpuUtilization"
  );

  const systemMetricsPanes = [
    {
      menuItem: "CPU",
      key: "cpu",
      isActive: true,
      render: <Charts options={cpuOptions} />,
    },
    {
      menuItem: "Memory",
      key: "memory",
      render: <Charts options={memoryOptions} />,
    },
  ];

  return (
    <div className="space-y-5">
      <Paper>
        <div className="flex justify-between items-center">
          <p className="text-gray-500 font-bold">Service Info</p>

          <BsChevronUp />
        </div>

        <div className="flex space-x-36">
          <div className="flex flex-col">
            <p className="text-gray-500 text-sm">Current version</p>

            <div className="flex items-center gap-1">
              <SiTicktick className="text-green-600" />
              <p>In sync</p>
            </div>
          </div>

          <div className="flex flex-col">
            <p className="text-gray-500 text-sm">Desired version</p>
            <p>{applications.desiredVersion}</p>
          </div>
        </div>

        <div className="flex items-center justify-between text-gray-500 pt-5">
          <button className="border bg-purple-700 text-white px-7 py-2 rounded-md text-sm">
            Deploy
          </button>

          <p className="text-xs text-gray-500">Last updated 5 hours ago</p>
        </div>
      </Paper>

      <div className="flex gap-4">
        <Paper width="w-1/2">
          <div>System metrics</div>

          <Tabs>
            {systemMetricsPanes.map((pane) => (
              <Tab component={pane.render} active={pane.isActive}>
                <p>{pane.menuItem}</p>
              </Tab>
            ))}
          </Tabs>
        </Paper>

        <Paper width="w-1/2">
          <div>Event History</div>

          <Table headings={headings}>
            <tbody>
              {eventHistoryData.map((row, rowIndex) => (
                <tr key={rowIndex}>
                  <td className="py-4 px-6 border-b border-gray-200">
                    <div>
                      <p>{row.event}</p>
                      <p className="text-xs text-gray-500">
                        {convertTimestampToRelativeTime(row.timestamp)}
                      </p>
                    </div>
                  </td>

                  <td className="py-4 px-6 border-b border-gray-200">
                    {row.version}
                  </td>

                  <td className="py-4 px-6 border-b border-gray-200">
                    <div className="w-1/2">
                      <StatusLabel status={row.status} filled />
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </Paper>
      </div>
    </div>
  );
};

export default Overview;
