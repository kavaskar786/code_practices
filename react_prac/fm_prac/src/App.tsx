import { Route, Routes, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
import Animations from "./pages/Animations";
import FlippingCardMain from "./pages/FlippingCardMain";
// import GestuesMain from "./pages/GestuesMain";
import Loading from "./pages/Loading";
import { motion, AnimatePresence } from "motion/react";
import Gestures from "./components/Gestures";
import Stagger from "./pages/Stagger";

const App = () => {
  const pageVariants = {
    initial: { opacity: 0, x: "-100%" },
    in: { opacity: 1, x: 0 },
    out: { opacity: 0, x: "100%" },
  };

  const pageTransition = {
    type: "tween",
    ease: "anticipate",
    duration: 0.3,
  };
  const location = useLocation();
  console.log(location.pathname);
  return (
    <div className="min-h-screen flex items-center justify-center flex-col min-w-full bg-white">
      <Navbar />
      <AnimatePresence mode="wait">
        <motion.div
          key={location.pathname} // Key changes after the previous animation completes
          initial="initial"
          animate="in"
          exit="out"
          variants={pageVariants}
          transition={pageTransition}
          className="relative  w-full"
        >
          <Routes>
            <Route path="/" element={<FlippingCardMain />} />
            <Route path="/Gestrues" element={<Gestures />} />
            <Route path="/Loading" element={<Loading />} />
            <Route path="/Animation" element={<Animations />} />
            <Route path="/Stagger" element={<Stagger />} />
          </Routes>
        </motion.div>
      </AnimatePresence>
      {/* <Animations />
      <Loading />
      <FlippingCardMain />
      <GestuesMain /> */}
    </div>
  );
};
export default App;
