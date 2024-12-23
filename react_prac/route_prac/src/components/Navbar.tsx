import { motion } from "motion/react";
const Navbar = () => {
  return (
    <div className="border-b-2 w-full">
      <div className="flex items-center justify-between w-[85%] mx-auto h-[8vh]  ">
        <div className="logo font-semibold">Kavaskar's Website</div>
        <nav className="flex items-center justify-center gap-4 ">
          <motion.div
            animate="rest"
            whileHover="hover"
            className="cursor-pointer	"
          >
            Home
            <motion.div
              variants={{ rest: { width: "0%" }, hover: { width: "100%" } }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="h-[2.5px] bg-black"
            ></motion.div>
          </motion.div>
          <motion.div
            animate="rest"
            whileHover="hover"
            className="cursor-pointer	"
          >
            Product
            <motion.div
              variants={{ rest: { width: "0%" }, hover: { width: "100%" } }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="h-[2.5px] bg-black"
            ></motion.div>
          </motion.div>
          <motion.div
            animate="rest"
            whileHover="hover"
            className="cursor-pointer	"
          >
            About
            <motion.div
              variants={{ rest: { width: "0%" }, hover: { width: "100%" } }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="h-[2.5px] bg-black"
            ></motion.div>
          </motion.div>
          <motion.div
            animate="rest"
            whileHover="hover"
            className="cursor-pointer	"
          >
            Contact
            <motion.div
              variants={{ rest: { width: "0%" }, hover: { width: "100%" } }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="h-[2.5px] bg-black"
            ></motion.div>
          </motion.div>
        </nav>
        <div className="flex items-center justify-center gap-4">
          <button className="bg-black text-white px-4 py-2 rounded-3xl hover:bg-[#636363]">
            Sign up
          </button>
          <button className="bg-black text-white px-4 py-2 rounded-3xl hover:bg-[#676666]">
            Login
          </button>
        </div>
      </div>
    </div>
  );
};
export default Navbar;
