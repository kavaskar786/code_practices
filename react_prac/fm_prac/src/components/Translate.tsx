import { motion } from "motion/react";
import { useState } from "react";

const Translate = () => {
  const [isFlipped, setIsFlipped] = useState<boolean>(false);
  return (
    <div className="flex items-center justify-center flex-row flex-wrap gap-4">
      <motion.div
        className="h-20 w-20 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg flex items-center justify-center text-white"
        initial={{ x: -100 }}
        animate={{ x: 100 }}
        transition={{ duration: 1.5 }}
      >
        <p>x:100</p>
      </motion.div>
      <motion.div
        className="h-20 w-20 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg flex items-center justify-center text-white"
        initial={{ y: 0 }}
        animate={{ y: 100 }}
        transition={{ duration: 1.5 }}
      >
        <p>y:100</p>
      </motion.div>
      <motion.div
        className="h-20 w-20 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg flex items-center justify-center text-white"
        initial={{ rotateX: 0 }}
        animate={{ rotateX: 360 }}
      >
        <p>rotateX:360</p>
      </motion.div>
      <motion.div
        className="h-20 w-20 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg flex items-center justify-center text-white"
        initial={{ rotateY: 0 }}
        animate={{ rotateY: 360 }}
        transition={{ duration: 1.5 }}
      >
        <p>rotateY:360</p>
      </motion.div>
      <motion.div
        className="h-20 w-20 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg flex items-center justify-center text-white"
        initial={{ rotate: 0 }}
        animate={{ rotate: 360 }}
        transition={{ duration: 1.5 }}
      >
        <p>rotate:360</p>
      </motion.div>
      <motion.div
        className="h-20 w-20 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg flex items-center justify-center text-white m-3 ml-9"
        initial={{ scale: 0 }}
        animate={{ scale: 2 }}
        transition={{ duration: 1.5 }}
      >
        <p>scale:2</p>
      </motion.div>
      <motion.div
        className="h-20 w-20 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg flex items-center justify-center text-white m-3 ml-16"
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 2 }}
        transition={{ duration: 1.5 }}
      >
        <p>scaleX:2</p>
      </motion.div>
      <motion.div
        className="h-20 w-20 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg flex items-center justify-center text-white m-3 ml-6"
        initial={{ scaleY: 0 }}
        animate={{ scaleY: 2 }}
        transition={{ duration: 1.5, ease: "easeInOut" }}
      >
        <p>scaleY:2</p>
      </motion.div>
      <motion.div
        className="h-20 w-20 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg flex items-center justify-center text-white m-3 ml-6"
        initial={{ skewX: 0 }}
        animate={{ skewX: 40 }}
        transition={{ duration: 3 }}
      >
        <p>skewX:40</p>
      </motion.div>
      <motion.div
        className="h-20 w-20 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg flex items-center justify-center text-white m-3 ml-6"
        initial={{ skewY: 0 }}
        animate={{ skewY: 40 }}
        transition={{ duration: 3 }}
      >
        <p>skewY:40</p>
      </motion.div>
      <motion.div
        className="h-20 w-20 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg flex items-center justify-center text-white m-3 ml-6"
        initial={{ skew: 0 }}
        animate={{ skew: 40 }}
        transition={{ duration: 3 }}
      >
        <p>skew:40</p>
      </motion.div>
      <motion.div
        onClick={() => setIsFlipped(!isFlipped)}
        className="h-20 w-20 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg flex items-center justify-center text-white m-3 ml-6"
        variants={{
          front: { rotate: 0 },
          back: { rotate: 180 },
        }}
        initial={"front"}
        animate={isFlipped ? "back" : "front"}
        transition={{ duration: 0.6 }}
      >
        <p>click to rotate</p>
      </motion.div>
    </div>
  );
};
export default Translate;
