import { motion } from "framer-motion";

const Stagger = () => {
  const parrentVariant = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.3 } }, // Reduced the delay
  };

  const childVariant = {
    hidden: { opacity: 0, y: -100 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-lime-300 to-lime-700 flex items-center justify-center flex-col">
      <h1 className="text-white text-2xl mb-10">
        This is the example of the Stagger
      </h1>
      <motion.div
        className="flex items-center justify-center gap-4 "
        variants={parrentVariant}
        initial="hidden"
        animate="visible"
      >
        {[...Array(5)].map((_, index) => (
          <motion.div
            key={index}
            className="h-24 w-24 rounded-2xl bg-green-300 flex items-center justify-center"
            variants={childVariant}
          >
            hello
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default Stagger;
