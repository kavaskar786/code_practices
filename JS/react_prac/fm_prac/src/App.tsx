import { Outlet, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";

import { motion, AnimatePresence } from "motion/react";

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
          <Outlet />
        </motion.div>
      </AnimatePresence>
      {/* <Animations />
      <Loading />
      <FlippingCardMain />
      <GestuesMain /> */}
      {/* <MotionValues /> */}
    </div>
  );
};
export default App;
