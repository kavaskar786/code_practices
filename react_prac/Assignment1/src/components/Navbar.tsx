import { useState } from "react";
import { CiMenuBurger } from "react-icons/ci";
import { IoClose } from "react-icons/io5";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="bg-[#141414c2] w-full text-white">
      <div className="w-[85%] mx-auto flex items-center justify-between h-[8vh] ">
        <pre className="text-2xl font-semibold">Kavaskar's</pre>
        <div
          className={`absolute flex items-center justify-center flex-col gap-5 min-h-[60vh] left-0 ${
            isOpen ? "top-[9%]" : "top-[-100%]"
          } w-full bg-[#141414c2] text-white md:static md:min-h-fit md:flex-row md:bg-[#00000000] `}
        >
          <NavLink to="/">
            <p>AG gird</p>
          </NavLink>
          <NavLink to="charts">Highchartz</NavLink>
          <button className="md:hidden">Sign Up/In</button>
        </div>
        <div className="">
          <button className="hidden md:block">signup/in</button>
          <button onClick={() => setIsOpen(!isOpen)} className="md:hidden ">
            {isOpen ? <IoClose /> : <CiMenuBurger />}
          </button>
        </div>
      </div>
    </div>
  );
};
export default Navbar;
