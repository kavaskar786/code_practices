import { Outlet, RouterProvider } from "react-router-dom";
import { route } from "./routes/routes";

export const App = () => {
  return (
    <div className="text">
      <RouterProvider router={route}></RouterProvider>
      <Outlet />
    </div>
  );
};
