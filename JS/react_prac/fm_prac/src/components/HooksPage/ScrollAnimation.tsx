import { motion } from "motion/react";
import { dragConstraints } from "../../lib/common/variables/variables";
import { cardStyle } from "../../lib/pages/HooksPage/styles/styles";

const ScrollAnimation = ({ textContent }: { textContent: string }) => {
  return (
    <div className="flex h-[100vh] items-center justify-center">
      <motion.div
        className={cardStyle}
        // style={{ x, backgroundColor }}
        initial={{ opacity: 0, scale: 0.5, y: 200 }}
        whileInView={{ opacity: 1, scale: 1.1, y: 0 }}
        transition={{ duration: 0.5 }}
        drag
        dragConstraints={dragConstraints}
      >
        {textContent}
      </motion.div>
    </div>
  );
};
export default ScrollAnimation;
