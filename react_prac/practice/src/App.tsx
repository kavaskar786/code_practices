// import Flex from "./components/Flex";
import { Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";

import NavBarTest from "./components/NavBarTest";
import Home from "./pages/Home";
import Search from "./pages/Search";

const App = () => {
  return (
    <div>
      <NavBarTest />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Search" element={<Search />} />
      </Routes>
      <Footer />
    </div>
  );
};
export default App;
