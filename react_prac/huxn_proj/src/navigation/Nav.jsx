import "./nav.css";
import InputText from "../components/InputText";
import { FiHeart } from "react-icons/fi";
import { AiOutlineShoppingCart, AiOutlineUserAdd } from "react-icons/ai";
const Nav = ({ query, handleInputChange }) => {
  return (
    <nav className="flex border-b-2 border-black items-center justify-around p-5 ml-7">
      <div className="nav-container">
        <InputText
          value={query}
          onChange={handleInputChange}
          placeHolder="Enter you Search shoes"
        />
      </div>
      <div className="profile-container flex gap-8">
        <a href="#">
          <FiHeart className="nav-icons w-6 h-6 " />
        </a>
        <a href="#">
          <AiOutlineShoppingCart className="nav-icons w-6 h-6" />
        </a>
        <a href="#">
          <AiOutlineUserAdd className="nav-icons w-6 h-6 " />
        </a>
      </div>
    </nav>
  );
};
export default Nav;
