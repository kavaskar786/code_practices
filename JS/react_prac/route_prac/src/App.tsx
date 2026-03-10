// import { Route, Routes } from "react-router-dom";
import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";
import { useLoadingContext } from "./context/contexts";
// import Home from "./pages/Home";
// import Products from "./pages/Products";
// import About from "./pages/About";
// import Contact from "./pages/Contact";

const App = () => {
  const { loading } = useLoadingContext();
  return (
    <div className="min-h-screen bg-[#fefcfcfa]">
      <Navbar />

      {loading === true ? "loading" : <Outlet />}
      {/* <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Products" element={<Products />} />
        <Route path="/About" element={<About />} />
        <Route path="/Contact" element={<Contact />} />
      </Routes> */}
    </div>
  );
};
export default App;
