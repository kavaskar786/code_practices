import HighchartsReact from "highcharts-react-official";
import Highcharts from "highcharts";

const LineChart = () => {
  const options = {
    title: { text: "Line charts" },
    xAxis: { categories: ["Jan", "Feb", "Mar", "Apr", "May"] },
    yAxis: { title: { text: "Values" } },
    series: [{ name: "line 1", data: [1, 3, 2, 4, 5] }],
  };
  return (
    <div>
      <HighchartsReact highcharts={Highcharts} options={options} />
    </div>
  );
};
export default LineChart;
