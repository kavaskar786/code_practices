import { useCounter } from "../Store";

const Buttons = () => {
  const { increment, decrement } = useCounter();
  return (
    <div>
      <button
        onClick={increment}
        className="px-4 py-2 rounded-lg bg-slate-800 text-white"
      >
        increment
      </button>
      <button
        onClick={decrement}
        className="px-4 py-2 rounded-lg bg-slate-800 text-white"
      >
        decrement
      </button>
    </div>
  );
};
export default Buttons;
