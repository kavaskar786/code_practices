import { Button } from "./components/ui/button";

const App = () => {
  return (
    <div className="text-3xl">
      <Button onClick={() => alert("hi")}>hello test</Button>
    </div>
  );
};
export default App;
