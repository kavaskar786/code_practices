import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import App from "../App";
import Home from "../pages/Home/Home";
import Contact from "../pages/Contact/Contact";

export const route = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element=<App />>
      <Route index element={<Home />} />
      <Route path="contact" element={<Contact />} />
    </Route>
  )
);
