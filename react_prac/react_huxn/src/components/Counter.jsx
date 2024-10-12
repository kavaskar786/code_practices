import { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);
  const handleClick = () => {
    setCount(count + 1);
  };
  const handleDecBtn = () => {
    setCount(count - 1);
  };
  return (
    <div>
      <p>{count}</p>
      <button onClick={handleClick}>+</button>
      <button onClick={handleDecBtn}>-</button>
    </div>
  );
};
export default Counter;
