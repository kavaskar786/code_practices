import { Value } from "../pages/AGgrid";

const Cell = ({ value }: Value) => {
  const handleClick = () => {
    window.alert("Hey there,Kavaskar's work is here");
  };
  return (
    <div className="flex items-center gap-4">
      <button
        onClick={handleClick}
        className=" px-[10px] py-2 bg-[#141414c2] rounded-lg h-8 flex items-center justify-center text-white	"
      >
        +
      </button>
      {value}
    </div>
  );
};
export default Cell;
