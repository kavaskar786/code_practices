import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import FlippingCardMain from "../pages/FlippingCardMain";
import GestuesMain from "../pages/GestuesMain";
import Loading from "../pages/Loading";
import Animations from "../pages/Animations";
import Hooks from "../pages/Hooks";
import Stagger from "../pages/Stagger";
// createBrowserRouter(
//   createRoutesFromElements(
//     <Route path="/" element={<App />}>
//       <Route index element={<FlippingCardMain />} />
//       <Route path="GestuesMain" element={<GestuesMain />} />
//       <Route path="Loading" element={<Loading />} />
//       <Route path="Animations" element={<Animations />} />
//     </Route>
//   )
// );

const Routes = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { index: true, element: <FlippingCardMain /> },
      { path: "Gestrues", element: <GestuesMain /> },
      { path: "Loading", element: <Loading /> },
      { path: "Animation", element: <Animations /> },
      { path: "Stagger", element: <Stagger /> },
      { path: "Hooks", element: <Hooks /> },
    ],
  },
]);
export default Routes;
