import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";

const ColumnChart = () => {
  const options = {
    chart: {
      type: "column",
    },
    title: {
      text: "Column Chart",
    },
    xAxis: {
      categories: ["Product A", "Product B", "Product C"],
    },
    yAxis: {
      title: {
        text: "Units Sold",
      },
    },
    series: [
      {
        name: "2023",
        data: [50, 70, 90],
      },
      {
        name: "2024",
        data: [60, 80, 100],
      },
      { name: "2025", data: [70, 90, 110] },
    ],
  };

  return <HighchartsReact highcharts={Highcharts} options={options} />;
};

export default ColumnChart;
