import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../pages/Home";
import Products from "../pages/Products";
import About from "../pages/About";
import Contact from "../pages/Contact";
import Form from "../components/Form";
import Detail from "../components/Detail";
import Users from "../pages/Users";
import User from "../components/User";
import UsersList from "../components/UsersList";
import { userLoader, usersLoader } from "../utils/loaders/UserLoaders";

import Error from "../components/Error";

// const routes = createBrowserRouter(
//   createRoutesFromElements(
//     <Route path="/" element={<App />}>
//       <Route index element={<Home />} />
//       <Route path="Products" element={<Products />} />
//       <Route path="About" element={<About />} />
//       <Route path="Contact" element={<Contact />}>
//         <Route path="Form" element={<Form />} />
//         <Route path="Detail" element={<Detail />} />
//       </Route>
//       <Route path="Users" element={<Users />}>
//         <Route index element={<UsersList />} loader={usersLoader} />
//         <Route path=":id" element={<User />} loader={userLoader} />
//       </Route>
//     </Route>
//   )
// );

const routes = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { index: true, element: <Home /> },
      { path: "Products", element: <Products /> },
      { path: "About", element: <About /> },
      {
        path: "Contact",
        element: <Contact />,
        children: [
          { index: true, element: <Form /> },
          { path: "Form", element: <Form /> },
          { path: "Detail", element: <Detail /> },
        ],
      },
      {
        path: "Users",
        element: <Users />,
        errorElement: <Error />,
        children: [
          {
            index: true,
            element: <UsersList />,
            loader: usersLoader,
          },
          {
            path: ":id",
            element: <User />,
            loader: userLoader,
          },
        ],
      },
      { path: "*", element: <Error /> },
    ],
  },
]);

export default routes;
