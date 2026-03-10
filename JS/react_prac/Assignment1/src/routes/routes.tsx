import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import App from "../App";
import AGgrid from "../pages/AGgrid";
import HignChartz from "../pages/HignChartz";
const routes = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route index element={<AGgrid />} />
      <Route path="charts" element={<HignChartz />} />
    </Route>
  )
);

export default routes;
