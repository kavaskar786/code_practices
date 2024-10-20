import { MdAccountCircle } from "react-icons/md";
import { IoMdSettings } from "react-icons/io";
const Navbar = ({ title, logo, option, bgColor }) => {
  return (
    <div className="h-1/6 text-white">
      <div className={` ${bgColor}`}>
        <nav className="list-none  flex justify-between items-center mx-5">
          <div className="logo flex justify-center items-center gap-2">
            <img src={logo} alt="Logo" className="h-8 w-8 rounded-md" />
            <p>{title}</p>
          </div>
          <div className="flex justify-center items-center gap-5 mt-1">
            <li className="px-4 py-2 h-12 rounded-2xl">
              <a href="">{option[0]}</a>
            </li>
            <li className="px-4 py-2 h-12 rounded-2xl">
              <a href="">{option[1]}</a>
            </li>
            <li className="px-4 py-2 h-12 rounded-2xl">
              <a href="">{option[2]}</a>
            </li>
            <li className="px-4 py-2 h-12 rounded-2xl">
              <a href="">{option[3]}</a>
            </li>
          </div>
          <div className="right_part flex justify-center items-center gap-2 text-xl	">
            <a href="">
              <p>
                <MdAccountCircle />
              </p>
            </a>
            <a href="">
              <p>
                <IoMdSettings />
              </p>
            </a>
          </div>
        </nav>
      </div>
    </div>
  );
};
export default Navbar;
