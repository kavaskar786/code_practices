import { createBrowserRouter } from "react-router-dom";
import { NotFound } from "../pages/NotFound";
import { Home } from "../pages/Home";

export const route = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);
