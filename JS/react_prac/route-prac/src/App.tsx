import { Outlet } from "react-router-dom";
import NavBar from "./components/NavBar";

const App = () => {
  return (
    <div>
      <NavBar />
      <h1>Hello i am a Practice of Router done Kavaskar and Likitha Yadav G</h1>
      <Outlet />
    </div>
  );
};
export default App;
