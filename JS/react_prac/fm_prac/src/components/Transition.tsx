import { motion } from "motion/react";
const Transition = () => {
  return (
    <div className="flex items-center justify-center flex-row flex-wrap gap-4">
      <motion.div
        className="h-20 w-20 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg flex items-center justify-center text-white ml-24 text-[10px]"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 1.5 }}
      >
        <p>scale: 1, delay:1.5</p>
      </motion.div>
      <motion.div
        className="h-20 w-20 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg flex items-center justify-center text-white ml-24 text-[10px]"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.5 }}
      >
        <p>scale: 1, duration: 1.5</p>
      </motion.div>

      <motion.div
        className="h-20 w-20 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg flex items-center justify-center text-white ml-24 text-[10px]"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.5, ease: "anticipate" }}
      >
        <p>scale: 1, duration: 1.5, ease:"anticipate"</p>
      </motion.div>
      <motion.div
        className="h-20 w-20 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg flex items-center justify-center text-white ml-24 text-[10px]"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.5, ease: "backIn" }}
      >
        <p>scale: 1, duration: 1.5, ease:"backIn"</p>
      </motion.div>
      <motion.div
        className="h-20 w-20 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg flex items-center justify-center text-white ml-24 text-[10px]"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.5, ease: "backInOut" }}
      >
        <p>scale: 1, duration: 1.5, ease:"backInOut" </p>
      </motion.div>
      <motion.div
        className="h-20 w-20 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg flex items-center justify-center text-white ml-24 text-[10px]"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.5, ease: "backOut" }}
      >
        <p>scale: 1, duration: 1.5, ease:"backOut" </p>
      </motion.div>
      <motion.div
        className="h-20 w-20 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg flex items-center justify-center text-white ml-24 text-[10px]"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.5, ease: "circIn" }}
      >
        <p>scale: 1, duration: 1.5, ease:"circIn" </p>
      </motion.div>
      <motion.div
        className="h-20 w-20 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg flex items-center justify-center text-white ml-24 text-[10px]"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.5, ease: "circInOut" }}
      >
        <p>scale: 1, duration: 1.5, ease:"circInOut" </p>
      </motion.div>
      <motion.div
        className="h-20 w-20 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg flex items-center justify-center text-white ml-24 text-[10px]"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.5, ease: "circOut" }}
      >
        <p>scale: 1, duration: 1.5, ease:"circOut" </p>
      </motion.div>
      <motion.div
        className="h-20 w-20 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg flex items-center justify-center text-white ml-24 text-[10px]"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.5, ease: "easeIn" }}
      >
        <p>scale: 1, duration: 1.5, ease:"easeIn" </p>
      </motion.div>
      <motion.div
        className="h-20 w-20 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg flex items-center justify-center text-white ml-24 text-[10px]"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
      >
        <p>scale: 1, duration: 1.5, ease:"easeOut" </p>
      </motion.div>
      <motion.div
        className="h-20 w-20 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg flex items-center justify-center text-white ml-24 text-[10px]"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.5, ease: "easeInOut" }}
      >
        <p>scale: 1, duration: 1.5, ease:"easeInOut" </p>
      </motion.div>
      <motion.div
        className="h-20 w-20 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg flex items-center justify-center text-white ml-24 text-[10px]"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.5, ease: "linear" }}
      >
        <p>scale: 1, duration: 1.5, ease:"linear" </p>
      </motion.div>
    </div>
  );
};
export default Transition;
