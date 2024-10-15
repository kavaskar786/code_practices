import TaskProvider from "./context/TaskContext";
import Counter from "./pages/Counter";
import Todo from "./pages/Todo";

const App = () => {
  return (
    <div className="font-sans	">
      <Counter />
      <TaskProvider>
        <Todo />
      </TaskProvider>
    </div>
  );
};
export default App;
