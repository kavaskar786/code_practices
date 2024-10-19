import { useState } from "react";
import "../index.css";
import Button from "../components/Button";
const Counter = () => {
  const [count, setCount] = useState(0);
  return (
    <div className="h-lvh flex justify-center items-center bg-black	flex-col w-full">
      <h1 className="text-white	text-3xl pb-2">Simple Counter</h1>
      <h1 className="text-white	text-8xl pb-2">{count}</h1>
      <div className="flex items-center justify-center gap-2">
        <Button text="Decrement" onClick={() => setCount(count - 1)} />
        <Button text="Increment" onClick={() => setCount(count + 1)} />
      </div>
    </div>
  );
};
export default Counter;

//moo deng
