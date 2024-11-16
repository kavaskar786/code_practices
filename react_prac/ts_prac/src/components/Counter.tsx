import { useReducer } from "react";
type State = {
  count: number;
};
type Action = {
  type: string;
};
const Counter = () => {
  const reducer = (state: State, action: Action) => {
    switch (action.type) {
      case "increment":
        return { count: state.count + 1 };
      case "decrement":
        return { count: state.count - 1 };
      default:
        return state;
    }
  };
  const [state, dispatch] = useReducer(reducer, { count: 0 });
  return (
    <div className="bg-[#e0e1d1ac]">
      Counter
      <p>{state.count}</p>
      <button onClick={() => dispatch({ type: "increment" })}>increment</button>
      <button onClick={() => dispatch({ type: "decrement" })}>decrement</button>
    </div>
  );
};
export default Counter;
