import Button from "../components/Button";
import { useTheme } from "../context/ThemeContext";

const Background = () => {
  const { toggleMode, isDarkMode } = useTheme();

  return (
    <div className="h-lvh  bg-white dark:bg-black ">
      <Button text="change theme" onClick={toggleMode} />
    </div>
  );
};
export default Background;
