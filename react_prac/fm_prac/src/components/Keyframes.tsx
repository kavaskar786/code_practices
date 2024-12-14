import { motion } from "motion/react";
const Keyframes = () => {
  return (
    <div className="flex items-center justify-center flex-row flex-wrap gap-4">
      <motion.div
        className="h-20 w-20 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg flex items-center justify-center text-white ml-24 text-[10px]"
        initial={{ scale: 0 }}
        animate={{ scale: [0, 1, 0.5, 1] }}
      >
        scale: [0, 1, 0.5, 1]
      </motion.div>
    </div>
  );
};
export default Keyframes;
