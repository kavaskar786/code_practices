import Button from "./components/Button";
import User from "./components/User";

const App = () => {
  return (
    <>
      <User name="kavaskar" age={20}>
        <p>hello</p>
      </User>
      <Button
        label="Click me"
        onClick={() => console.log("Clicked!")}
        disabled
      />
    </>
  );
};
export default App;
