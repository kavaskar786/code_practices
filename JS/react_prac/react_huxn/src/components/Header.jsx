import { FaHome } from "react-icons/fa";
import { FaInfoCircle } from "react-icons/fa";
import { IoMdContact } from "react-icons/io";

const Header = () => {
  return (
    <header>
      <h1>Welcome to my wesite</h1>
      <nav>
        <a href="">
          <FaHome />
          Home
        </a>

        <a href="">
          About
          <FaInfoCircle />
        </a>

        <a href="">
          Contact
          <IoMdContact />
        </a>
      </nav>
    </header>
  );
};

export default Header;
