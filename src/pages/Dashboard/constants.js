// Components
import Charts from "../../components/Charts";
import StatusLabel from "../../components/StatusLabel";

export const CPU_OPTIONS = {
  title: {
    text: "CPU Utilization",
    align: "left",
  },

  series: [
    {
      data: [1, 2, 3],
    },
  ],
};

export const panes = [
  {
    menuItem: "CPU",
    key: "cpu",
    isActive: true,
    render: <Charts options={CPU_OPTIONS} />,
  },
  {
    menuItem: "Memory",
    key: "memory",
    render: <Charts options={CPU_OPTIONS} />,
  },
];

export const headings = ["Event", "Version", "Status"];

export const body = [
  [
    <div>
      <p>Deploy</p>
      <p className="text-xs text-gray-500">1 minute ago</p>
    </div>,
    "1.2.1",
    <div className="w-1/2">
      <StatusLabel status="deployed" filled />
    </div>,
  ],
  [
    <div>
      <p>Deploy</p>
      <p className="text-xs text-gray-500">2 minutes ago</p>
    </div>,
    "1.2.2",
    <div className="w-1/2">
      <StatusLabel status="failed" filled />
    </div>,
  ],
];
