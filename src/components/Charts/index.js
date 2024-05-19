import React, { memo } from "react";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";

const Charts = ({ options }) => {
  return (
    <div>
      <HighchartsReact highcharts={Highcharts} options={options} />
    </div>
  );
};

// Custom comparison function for memo
const areEqual = (prevProps, nextProps) => {
  return (
    JSON.stringify(prevProps.options) === JSON.stringify(nextProps.options)
  );
};

export default memo(Charts, areEqual);
