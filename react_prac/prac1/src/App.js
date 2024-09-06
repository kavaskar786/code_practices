const Test = ({ props }) => {
  return (
    <div>
      <h1>{props ? "hello" : "hi"}</h1>
    </div>
  );
};
const App = () => {
  return (
    <div>
      App
      <Test props={false} />
    </div>
  );
};

export default App;
