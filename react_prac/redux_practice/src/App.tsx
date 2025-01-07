import { createRoot } from "react-dom/client";
import "./index.css";
import { store } from "./store/store";
import { Provider } from "react-redux";
import Home from "./Home";

createRoot(document.getElementById("root")!).render(
  <Provider store={store}>
    <Home />
  </Provider>
);
