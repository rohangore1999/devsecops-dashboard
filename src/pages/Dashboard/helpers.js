import Highcharts from "highcharts";

const groupDataByApplicationId = (data, key) => {
  const groupedData = {};

  data.forEach((point) => {
    const { applicationId, timestamp } = point;
    const time = parseInt(timestamp, 10) * 1000;
    const utilization = parseFloat(point[key]);

    if (!groupedData[applicationId]) {
      groupedData[applicationId] = [];
    }

    groupedData[applicationId].push([time, utilization]);
  });

  return groupedData;
};

const getSeriesData = (groupedData, applications) =>
  Object.keys(groupedData).map((applicationId) => ({
    name: applications.find(
      (application) => application.id === Number(applicationId)
    ).name,
    data: groupedData[applicationId],
    type: "spline",
  }));

export const getChartOptions = (data, title, key, applications) => {
  const groupedData = groupDataByApplicationId(data, key);

  const seriesData = getSeriesData(groupedData, applications);

  return {
    title: {
      text: `${title} (%)`,
      align: "left",
    },
    yAxis: {
      title: {
        text: title,
      },
      labels: {
        formatter: function () {
          return `${this.value}%`;
        },
      },
    },
    xAxis: {
      type: "datetime",
      title: {
        text: "Timestamp",
      },
      dateTimeLabelFormats: {
        hour: "%I:%M %p",
        minute: "%I:%M %p",
      },
      labels: {
        formatter: function () {
          return Highcharts.dateFormat("%I:%M %p", this.value);
        },
      },
      accessibility: {
        rangeDescription: "Range: Custom timestamps",
      },
    },
    tooltip: {
      pointFormatter: function () {
        return `<span style="color:${this.color}">\u25CF</span> ${this.series.name}: <b>${this.y}%</b><br/>`;
      },
    },
    plotOptions: {
      spline: {
        lineWidth: 4,
        states: {
          hover: {
            lineWidth: 5,
          },
        },
        marker: {
          enabled: false,
        },
      },
    },
    series: seriesData,
  };
};
