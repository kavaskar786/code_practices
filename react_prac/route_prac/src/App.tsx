import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Products from "./pages/Products";
import About from "./pages/About";
import Contacts from "./pages/Contacts";

const App = () => {
  return (
    <div className="min-h-screen bg-[#fefcfcfa]">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Products" element={<Products />} />
        <Route path="/About" element={<About />} />
        <Route path="/Contacts" element={<Contacts />} />
      </Routes>
    </div>
  );
};
export default App;
