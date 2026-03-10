import { createRoot } from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import routes from "./routes/routes";
import MainContext from "./context/MainContext";

// import App from "./App.tsx";
// import { BrowserRouter } from "react-router-dom";

createRoot(document.getElementById("root")!).render(
  <MainContext>
    <RouterProvider router={routes}></RouterProvider>
  </MainContext>
  // <BrowserRouter>
  //   <App />
  // </BrowserRouter>
);
