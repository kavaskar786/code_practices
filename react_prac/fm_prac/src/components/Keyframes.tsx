import { motion } from "framer-motion";
const Keyframes = () => {
  return (
    <div className="flex items-center justify-center flex-row flex-wrap gap-4">
      <motion.div
        className="h-20 w-20 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg flex items-center justify-center text-white  text-[10px]"
        initial={{ scale: 0 }}
        animate={{ scale: [1, 1.1, 1] }}
        transition={{ duration: 0.5, repeat: Infinity, ease: "easeInOut" }}
      >
        scale: [0, 1, 0.5, 1]
      </motion.div>
    </div>
  );
};
export default Keyframes;
