import { useState } from "react";

const StatePract = () => {
  const [count, setCount] = useState<number>(0);
  return (
    <div>
      <h1>Counter👇</h1>
      <p>{count}</p>
      <button onClick={() => setCount(count - 1)}>Decrement</button>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
};
export default StatePract;
