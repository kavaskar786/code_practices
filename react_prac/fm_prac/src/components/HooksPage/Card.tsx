import { motion, MotionValue } from "framer-motion";
import { dragConstraints } from "../../lib/common/variables/variables";
import { cardStyle } from "../../lib/pages/HooksPage/styles/styles";
const Card = ({
  x,
  textContent,
  backgroundColor,
}: {
  x: MotionValue;
  textContent: string;
  backgroundColor?: MotionValue;
}) => {
  return (
    <motion.div
      className={cardStyle}
      style={{ x, backgroundColor }}
      animate={{ x: -100 }}
      transition={{ duration: 2 }}
      drag
      dragConstraints={dragConstraints}
    >
      {textContent}
    </motion.div>
  );
};
export default Card;
