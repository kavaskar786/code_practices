import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

const App = () => {
  const location = useLocation();

  // Animation configurations
  const pageVariants = {
    initial: { opacity: 0, x: "-100%" },
    in: { opacity: 1, x: 0 },
    out: { opacity: 0, x: "100%" },
  };

  const pageTransition = {
    type: "tween",
    ease: "anticipate",
    duration: 0.5,
  };

  return (
    <div className="bg-[#212835] min-h-[100vh]">
      <Navbar />

      {/* AnimatePresence for route transitions */}
      <AnimatePresence mode="wait">
        <motion.div
          key={location.pathname} // Key changes after the previous animation completes
          initial="initial"
          animate="in"
          exit="out"
          variants={pageVariants}
          transition={pageTransition}
          className="relative overflow-hidden"
        >
          <Outlet />
        </motion.div>
      </AnimatePresence>

      <Footer />
    </div>
  );
};

export default App;
