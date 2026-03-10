import Buttons from "./components/Buttons";
import { useCounter } from "./Store";

const App = () => {
  const { count } = useCounter();
  return (
    <div>
      <h1>Counter: {count}</h1>
      <Buttons />
    </div>
  );
};
export default App;
