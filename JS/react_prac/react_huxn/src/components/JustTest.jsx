import { useState } from "react";

const JustTest = (props) => {
  const [count, setCount] = useState(setCount(0 + 1));
  const [name, setName] = useState("kavaskar");
  const handleBtn = () => {
    setName("likitha");
  };
  return (
    <div className="container">
      <div>hello world {props.name}</div>
      <div>hello world {props.name2}</div>
      <h1>{count}</h1>
      <h2>{name}</h2>
      <button onClick={handleBtn}>Change</button>
    </div>
  );
};
export default JustTest;
