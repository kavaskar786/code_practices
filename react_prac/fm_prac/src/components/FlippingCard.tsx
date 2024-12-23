import { useState } from "react";
import { motion } from "framer-motion";

const FlippingCard = () => {
  const [isFlipped, setIsFlipped] = useState<boolean>(false);
  const varients = { front: { rotateY: 0 }, back: { rotateY: 180 } };
  return (
    <motion.div
      className="min-h-screen w-full bg-gradient-to-b from-[#f5ea8c] to-[#fd0] prespective-1000 flex items-center justify-center"
      onClick={() => setIsFlipped(!isFlipped)}
    >
      <motion.div
        className={`w-[30vh] h-16 rounded-lg shadow-lg transform-style-preserve-3d text-black bg-[#fffaa4] flex items-center justify-center`}
        variants={varients}
        animate={isFlipped ? "back" : "front"}
      >
        <p>I am a flipping Card</p>
      </motion.div>
    </motion.div>
  );
};
export default FlippingCard;
