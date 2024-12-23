import { spring } from "motion";
import { motion } from "motion/react";

const Gestures = () => {
  return (
    <div className="min-h-screen bg-gradient-to-r from-[#ff9797] to-[#f00] flex items-center justify-center gap-4 w-full">
      <motion.div
        className="w-28 h-28 rounded-3xl bg-white flex items-center justify-center"
        whileHover={{ scale: 1.1 }}
        transition={{
          ease: "easeInOut",
          duration: 0.8,
          type: spring,
          stiffness: 300,
        }}
      >
        <p>Hover me</p>
      </motion.div>
      <motion.div
        className="w-28 h-28 rounded-3xl bg-white flex items-center justify-center"
        whileTap={{ scale: 1.1 }}
        transition={{
          ease: "easeInOut",
          duration: 0.8,
          type: spring,
          stiffness: 300,
        }}
      >
        <p>Tap me</p>
      </motion.div>
    </div>
  );
};
export default Gestures;
