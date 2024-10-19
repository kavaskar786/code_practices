import { useState, useEffect, useContext, createContext } from "react";
export const ThemeContext = createContext();
const ThemeProvider = ({ children }) => {
  const [mode, setMode] = useState("light");
  const toggleMode = () => {
    mode === "light" ? setMode("dark") : setMode("light");
  };
  const isDarkMode = () => {
    const isDark = mode === "light" ? false : true;
    return isDark;
  };
  useEffect(() => {
    isDarkMode()
      ? document.documentElement.classList.add("dark")
      : document.documentElement.classList.remove("dark");
  }, [mode]);

  return (
    <ThemeContext.Provider value={{ toggleMode, isDarkMode }}>
      {children}
    </ThemeContext.Provider>
  );
};
export default ThemeProvider;

export const useTheme = () => useContext(ThemeContext);
