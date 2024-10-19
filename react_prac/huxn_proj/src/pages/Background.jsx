import Button from "../components/Button";
import { useTheme } from "../context/ThemeContext";

const Background = () => {
  const { toggleMode, isDarkMode } = useTheme();

  return (
    <div className="h-lvh  bg-white dark:bg-black ">
      <div className="h-16 w-16 bg-white dark:bg-black"></div>
      <Button text="change theme" onClick={toggleMode} />
    </div>
  );
};
export default Background;
