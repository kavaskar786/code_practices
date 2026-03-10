import { useEffect, useRef, useState } from "react";

const Test = () => {
  const [count, setCount] = useState(0);
  const intervalRef = useRef(null);
  useEffect(() => {
    intervalRef.current = setCount(count + 1);
  }, []);
  return <div>{count}</div>;
};
export default Test;
