import TaskProvider from "./context/TaskContext";
import ThemeProvider from "./context/ThemeContext";
import Background from "./pages/Background";
import Calculator from "./pages/Calculator";
import Counter from "./pages/Counter";
import Meals from "./pages/Meals";
import Todo from "./pages/Todo";

const App = () => {
  return (
    <div className="font-sans	">
      <Counter />
      <TaskProvider>
        <Todo />
      </TaskProvider>
      <Meals />
      <TaskProvider>
        <Calculator />
      </TaskProvider>
      <ThemeProvider>
        <Background />
      </ThemeProvider>
    </div>
  );
};
export default App;
