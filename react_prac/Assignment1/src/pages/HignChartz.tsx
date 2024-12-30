import ColumnChart from "../components/ColumnChart";
import LineChart from "../components/LineChart";

const HignChartz = () => {
  return (
    <div className="min-h-[92vh] flex items-center justify-center flex-col">
      <h1 className="font-title text-white text-4xl mb-10">
        Highcharts Paractice
      </h1>
      <div className="flex items-center justify-center gap-4">
        <div className=" w-[70vh] h-[51.3vh] rounded-2xl overflow-hidden">
          <LineChart />
        </div>
        <div className="w-[70vh] h-[51.3vh] rounded-2xl overflow-hidden">
          <ColumnChart />
        </div>
      </div>
    </div>
  );
};
export default HignChartz;
