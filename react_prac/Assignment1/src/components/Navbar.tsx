import { useState } from "react";
import { CiMenuBurger } from "react-icons/ci";
import { IoClose } from "react-icons/io5";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="bg-[#212835] w-full text-white shadow-2xl">
      <div className="w-[85%] mx-auto flex items-center justify-between h-[8vh] ">
        <pre className="text-2xl font-semibold">Kavaskar's</pre>
        <div
          className={`absolute flex items-center justify-center flex-col gap-5 min-h-[60vh] left-0 ${
            isOpen ? "top-[9%]" : "top-[-100%]"
          } w-full bg-[#475570] rounded-2xl text-white md:static md:min-h-fit md:flex-row md:bg-[#00000000] z-10`}
        >
          <div className="">
            <NavLink to="/">
              <p>AG gird</p>
            </NavLink>
          </div>
          <div className="">
            <NavLink to="charts">
              <p>Highchartz</p>
            </NavLink>
          </div>
          <button className="md:hidden hover:underline-offset-2	 decoration-[#ffffff]">
            Sign Up/In
          </button>
        </div>
        <div className="">
          <button className="hidden md:block ">SignUp/In</button>
          <button onClick={() => setIsOpen(!isOpen)} className="md:hidden ">
            {isOpen ? <IoClose /> : <CiMenuBurger />}
          </button>
        </div>
      </div>
    </div>
  );
};
export default Navbar;
