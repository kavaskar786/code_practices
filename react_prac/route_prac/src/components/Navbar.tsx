import { motion } from "motion/react";
import { Link, NavLink } from "react-router-dom";
const Navbar = () => {
  return (
    <div className="border-b-2 w-full">
      <div className="flex items-center justify-between w-[85%] mx-auto h-[8vh]  ">
        <div className="logo font-semibold">Kavaskar's Website</div>
        <nav className="flex items-center justify-center gap-4 ">
          <NavLink to="/">
            <motion.div
              animate="rest"
              whileHover="hover"
              className="cursor-pointer	"
            >
              <p>Home</p>
              <motion.div
                variants={{ rest: { width: "0%" }, hover: { width: "100%" } }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                className="h-[2.5px] bg-black"
              ></motion.div>
            </motion.div>
          </NavLink>
          <Link to="/Products">
            <motion.div
              animate="rest"
              whileHover="hover"
              className="cursor-pointer	"
            >
              <p>Product</p>
              <motion.div
                variants={{ rest: { width: "0%" }, hover: { width: "100%" } }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                className="h-[2.5px] bg-black"
              ></motion.div>
            </motion.div>
          </Link>
          <Link to="/About">
            <motion.div
              animate="rest"
              whileHover="hover"
              className="cursor-pointer	"
            >
              <p>About</p>
              <motion.div
                variants={{ rest: { width: "0%" }, hover: { width: "100%" } }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                className="h-[2.5px] bg-black"
              ></motion.div>
            </motion.div>
          </Link>
          <Link to="/Contact">
            <motion.div
              animate="rest"
              whileHover="hover"
              className="cursor-pointer	"
            >
              <p>Contact</p>
              <motion.div
                variants={{ rest: { width: "0%" }, hover: { width: "100%" } }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                className="h-[2.5px] bg-black"
              ></motion.div>
            </motion.div>
          </Link>
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
