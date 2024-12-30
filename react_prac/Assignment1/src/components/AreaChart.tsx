import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";

const AreaChart = () => {
  const options = {
    chart: {
      type: "area",
    },
    title: {
      text: "Area Chart",
    },
    xAxis: {
      categories: ["Q1", "Q2", "Q3", "Q4"],
    },
    yAxis: {
      title: {
        text: "Revenue ($K)",
      },
    },
    series: [
      {
        name: "2023",
        data: [50, 75, 100, 125],
      },
      {
        name: "2024",
        data: [60, 80, 110, 130],
      },
    ],
  };

  return <HighchartsReact highcharts={Highcharts} options={options} />;
};

export default AreaChart;
