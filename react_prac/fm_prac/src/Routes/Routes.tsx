import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import App from "../App";
import FlippingCardMain from "../pages/FlippingCardMain";
import GestuesMain from "../pages/GestuesMain";
import Loading from "../pages/Loading";
import Animations from "../pages/Animations";

const Routes = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route index element={<FlippingCardMain />} />
      <Route path="GestuesMain" element={<GestuesMain />} />
      <Route path="Loading" element={<Loading />} />
      <Route path="Animations" element={<Animations />} />
    </Route>
  )
);
export default Routes;
