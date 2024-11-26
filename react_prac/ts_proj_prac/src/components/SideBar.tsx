import { FaHome } from "react-icons/fa";

const SideBar = () => {
  return (
    <div className="sidebar fixed bg-black w-20 top-0 left-0 text-white h-screen ">
      <ul className="p-4 h-full flex flex-col justify-between items-center">
        <li>
          <div className="flex items-center ">
            <FaHome size={18} />
          </div>
        </li>
      </ul>
    </div>
  );
};
export default SideBar;
