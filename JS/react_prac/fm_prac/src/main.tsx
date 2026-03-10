import { createRoot } from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import Routes from "./Routes/Routes";

createRoot(document.getElementById("root")!).render(
  <RouterProvider router={Routes}></RouterProvider>
);
