import HighchartsReact from "highcharts-react-official";
import Highcharts from "highcharts";

const LineChart = () => {
  const options = {
    title: { text: "Line Chart" },
    xAxis: {
      categories: ["Jan", "Feb", "Mar", "Apr", "May"],
    },
    yAxis: { title: { text: "Values" } },
    series: [
      { name: "Sales", data: [10, 8, 20, 40, 30] },
      { name: "Revenue", data: [20, 15, 40, 25, 60] },
      { name: "Expenses", data: [40, 45, 55, 65, 75] },
    ],
  };
  return (
    <div>
      <HighchartsReact highcharts={Highcharts} options={options} />
    </div>
  );
};
export default LineChart;
