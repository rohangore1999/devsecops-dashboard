export const formattedData = (data, key) => {
  return data.map((point) => [
    parseInt(point.timestamp, 10) * 1000, // X axis
    parseFloat(point[key]), // Y axis
  ]);
};

export const getChartOptions = (data, title, key) => ({
  title: {
    text: title,
    align: "left",
  },

  yAxis: {
    title: {
      text: title,
    },
  },

  xAxis: {
    type: "datetime",
    title: {
      text: "Timestamp",
    },
    accessibility: {
      rangeDescription: "Range: Custom timestamps",
    },
  },

  series: [
    {
      name: title,
      data: formattedData(data, key),
    },
  ],
});
