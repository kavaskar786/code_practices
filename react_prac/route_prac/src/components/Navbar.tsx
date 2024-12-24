import { motion } from "motion/react";
import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
const Navbar = () => {
  const [isActive, setIsActive] = useState<number>(0);
  return (
    <div className="border-b-2 w-full">
      <div className="flex items-center justify-between w-[85%] mx-auto h-[8vh]  ">
        <div className="logo font-semibold">Kavaskar's Website</div>
        <nav className="flex items-center justify-center gap-4 ">
          <NavLink to="/">
            <motion.div
              variants={{
                rest: { color: "#000" },
                hover: { color: "teal" },
                active: { color: "teal" },
              }}
              animate={`${isActive === 0 ? "active" : "rest"}`}
              whileHover="hover"
              className="cursor-pointer	"
              onClick={() => setIsActive(0)}
            >
              <p>Home</p>
              <motion.div
                variants={{
                  rest: { width: "0%" },
                  hover: { width: "100%" },
                  active: { backgroundColor: "teal" },
                }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                className="h-[2.5px] bg-black"
              ></motion.div>
            </motion.div>
          </NavLink>
          <Link to="/Products">
            <motion.div
              variants={{
                rest: { color: "#000" },
                hover: { color: "teal" },
                active: { color: "teal" },
              }}
              animate={`${isActive === 1 ? "active" : "rest"}`}
              whileHover="hover"
              className="cursor-pointer	"
              onClick={() => setIsActive(1)}
            >
              <p>Product</p>
              <motion.div
                variants={{
                  rest: { width: "0%" },
                  hover: { width: "100%" },
                  active: { backgroundColor: "teal" },
                }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                className="h-[2.5px] bg-black"
              ></motion.div>
            </motion.div>
          </Link>
          <Link to="/About">
            <motion.div
              variants={{
                rest: { color: "#000" },
                hover: { color: "teal" },
                active: { color: "teal" },
              }}
              animate={`${isActive === 2 ? "active" : "rest"}`}
              whileHover="hover"
              className="cursor-pointer	"
              onClick={() => setIsActive(2)}
            >
              <p>About</p>
              <motion.div
                variants={{
                  rest: { width: "0%" },
                  hover: { width: "100%" },
                  active: { backgroundColor: "teal" },
                }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                className="h-[2.5px] bg-black"
              ></motion.div>
            </motion.div>
          </Link>
          <Link to="/Contact">
            <motion.div
              variants={{
                rest: { color: "#000" },
                hover: { color: "teal" },
                active: { color: "teal" },
              }}
              animate={`${isActive === 3 ? "active" : "rest"}`}
              whileHover="hover"
              className="cursor-pointer	"
              onClick={() => setIsActive(3)}
            >
              <p>Contact</p>
              <motion.div
                variants={{
                  rest: { width: "0%" },
                  hover: { width: "100%" },
                  active: { backgroundColor: "teal" },
                }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                className="h-[2.5px] bg-black"
              ></motion.div>
            </motion.div>
          </Link>
          <Link to="/Users">
            <motion.div
              variants={{
                rest: { color: "#000" },
                hover: { color: "teal" },
                active: { color: "teal" },
              }}
              animate={`${isActive === 4 ? "active" : "rest"}`}
              whileHover="hover"
              className="cursor-pointer	"
              onClick={() => setIsActive(4)}
            >
              <p>Users</p>
              <motion.div
                variants={{
                  rest: { width: "0%" },
                  hover: { width: "100%" },
                  active: { backgroundColor: "teal" },
                }}
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
