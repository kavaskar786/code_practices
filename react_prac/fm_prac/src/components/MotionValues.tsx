import { motion, useSpring } from "framer-motion";
import { ChangeEvent } from "react";
const MotionValues = () => {
  const scale = useSpring(1);
  return (
    <>
      <motion.div
        className="w-24 h-24 bg-gray-700"
        style={{ scale }}
      ></motion.div>
      <input
        type="range"
        min={0.5}
        max={2}
        step={0.1}
        onChange={(e: ChangeEvent<HTMLInputElement>) =>
          scale.set(parseFloat(e.target.value))
        }
      />
    </>
  );
};
export default MotionValues;
