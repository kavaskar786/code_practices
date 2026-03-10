import { useDispatch, useSelector } from "react-redux";
import { decrement, increment } from "../features/counter/counterSlice";

const Counter = () => {
  const count = useSelector(
    ({ counter }: { counter: { value: number } }) => counter.value
  );
  const dispatch = useDispatch();
  return (
    <div>
      {count}
      <div className="">
        <button className="" onClick={() => dispatch(increment())}>
          +
        </button>
        <button className="" onClick={() => dispatch(decrement())}>
          -
        </button>
      </div>
    </div>
  );
};
export default Counter;
