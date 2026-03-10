import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";

const PieChart = () => {
  const options = {
    chart: {
      type: "pie",
    },
    title: {
      text: "Pie Chart",
    },
    series: [
      {
        name: "Market Share",
        data: [
          { name: "Company A", y: 40 },
          { name: "Company B", y: 30 },
          { name: "Company C", y: 20 },
          { name: "Others", y: 10 },
        ],
      },
    ],
  };

  return <HighchartsReact highcharts={Highcharts} options={options} />;
};

export default PieChart;
