import AreaChart from "../components/AreaChart";
import ColumnChart from "../components/ColumnChart";
import LineChart from "../components/LineChart";
import PieChart from "../components/PieChart";
import Highcharts from "highcharts";

// Apply a custom theme globally
Highcharts.setOptions({
  colors: [
    "#727272",
    "#4c4c4c",
    // "#1c1f26",
    "#656565",
    // "#96b6f3",
    "#3f3f3f",
    "#121418",
  ],
  chart: {
    backgroundColor: "#212835",
    style: {
      fontFamily: "Arial, sans-serif",
    },
  },
  title: {
    style: {
      color: "#fff",
      fontSize: "20px",
    },
  },
  xAxis: {
    labels: {
      style: {
        color: "#fff", // Color of the x-axis labels
      },
    },
  },
  yAxis: {
    labels: {
      style: {
        color: "#fff",
      },
    },
    title: { style: { color: "#fff" } },
  },
  legend: {
    itemStyle: {
      color: "#fff",
    },
  },
});
const HignChartz = () => {
  return (
    <div className="min-h-[92vh] flex items-center justify-center flex-col ">
      <h1 className="font-title text-white text-2xl md:text-4xl mb-10">
        Highcharts Paractice
      </h1>
      <div className="flex items-center justify-center gap-4 flex-wrap">
        <div className=" w-[40vh] md:w-[70vh] h-[51.3vh] rounded-2xl overflow-hidden  shadow-2xl shadow-[#46586e]">
          <LineChart />
        </div>
        <div className="w-[40vh] md:w-[70vh] h-[51.3vh] rounded-2xl overflow-hidden shadow-2xl shadow-[#46586e]">
          <ColumnChart />
        </div>
        <div className="w-[40vh] md:w-[70vh] h-[51.3vh] rounded-2xl overflow-hidden shadow-2xl shadow-[#46586e]">
          <PieChart />
        </div>
        <div className="w-[40vh] md:w-[70vh] h-[51.3vh] rounded-2xl overflow-hidden shadow-2xl shadow-[#46586e]">
          <AreaChart />
        </div>
      </div>
    </div>
  );
};
export default HignChartz;
