import { useState } from "react";
import "../index.css";
const Counter = () => {
  const [count, setCount] = useState(0);
  return <div className="text-3xl font-bold underline test">Counter</div>;
};
export default Counter;
