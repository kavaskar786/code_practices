import Button from "../components/Button";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { useTheme } from "../context/ThemeContext";
import logo from "../images/backgroundLogo.png";

const Background = () => {
  const { toggleMode, isDarkMode } = useTheme();

  return (
    <div className="h-lvh  bg-white text-black dark:text-white  dark:bg-black ">
      <Navbar
        title="My Calulator app"
        logo={logo}
        option={["Home", "Meals", "About", "Contact"]}
        bgColor="text-black dark:text-white"
      />
      <div className="h-4/6 flex items-center justify-center">
        <Button text="change theme" onClick={toggleMode} />
      </div>
      <Footer text="@ My Calculator app" />
    </div>
  );
};
export default Background;
