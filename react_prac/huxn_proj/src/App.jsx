import Nav from "./navigation/Nav";
import Products from "./products/Products";
import Recommended from "./recommended/Recommended";
import Sidebar from "./sidebars/Sidebar";
import "./Style.css";
// import TaskProvider from "./context/TaskContext";
// import ThemeProvider from "./context/ThemeContext";
// import Background from "./pages/Background";
// import Calculator from "./pages/Calculator";
// import Counter from "./pages/Counter";
// import HiddenSearchBar from "./pages/HiddenSearchBar";
// import Meals from "./pages/Meals";
// import Todo from "./pages/Todo";

const App = () => {
  return (
    <div className="font-sans	">
      {/* <Counter />
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
      <HiddenSearchBar /> */}
      <Sidebar />
      <Nav />
      <Recommended />
      <Products />
    </div>
  );
};
export default App;
