import { useState } from "react";
import { CiMenuBurger } from "react-icons/ci";
import { IoClose } from "react-icons/io5";

const NavBarTest = () => {
  const [open, setOpen] = useState<boolean>(false);
  const handleClick = () => {
    setOpen(open ? false : true);
  };
  return (
    <div className="bg-[#00000094]">
      <nav className="flex items-center justify-between h-[9vh] w-[85%] mx-auto">
        <div className="">
          <div className="logo cursor-pointer font-semibold	text-white">
            START BOOTSTRAP
          </div>
        </div>
        <div
          className={`md:static md:min-h-fit md:bg-[#00000000] md:w-auto absolute bg-[#00000094] min-h-[60vh] left-0  ${
            open ? "top-[9%]" : "top-[-100%]"
          } w-full flex items-center justify-center `}
        >
          <div className="flex md:flex-row flex-col items-center justify-center gap-3 text-[#9e8982]">
            <button className="">SIGN UP</button>
            <button className="">LOG IN</button>
          </div>
        </div>
        <div onClick={() => handleClick()} className="md:hidden text-[#9e8982]">
          {open ? <IoClose /> : <CiMenuBurger />}
        </div>
      </nav>
    </div>
  );
};
export default NavBarTest;
