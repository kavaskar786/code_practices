import { useReducer, useState } from "react";

const CountReducer = () => {
  const [step, setStep] = useState(1);
  const [input, setInput] = useState("");
  const initialState = { count: 0 };
  const reducer = (state, action) => {
    switch (action.type) {
      case "increment":
        return { ...state, count: state.count + step };
      case "decrement":
        return { ...state, count: state.count - step };
      case "reset":
        return { ...state, count: 0 };
    }
  };
  const [state, dispatch] = useReducer(reducer, initialState);
  const handleClick = () => {
    setStep(parseInt(input));
    setInput("");
  };
  return (
    <div>
      <h1>CountReducer</h1>
      <p>{state.count}</p>
      <button onClick={() => dispatch({ type: "increment" })}>increment</button>
      <button onClick={() => dispatch({ type: "decrement" })}>decrement</button>
      <button onClick={() => dispatch({ type: "reset" })}>Reset</button>
      <input
        type="text"
        value={input}
        placeholder="enter the value"
        onChange={(e) => setInput(e.target.value)}
      />
      <div className="">
        <button onClick={handleClick}>add step</button>
      </div>
    </div>
  );
};
export default CountReducer;
