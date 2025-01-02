import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import App from "../App";
import Home from "../pages/Home";

export const Routes = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
          <Route index element={<Home />} />
          <Route path=""
    </Route>
  )
);
