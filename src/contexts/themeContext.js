import React, { useEffect } from "react";

export const MODE_DARK = "light";
export const MODE_LIGHT = "dark";

export const ThemeContext = React.createContext();

const Provider = ({ children }) => {
  const CLASS_DARK = "dark-mode";
  const [theme, setTheme] = React.useState(MODE_LIGHT);

  const toggle = () => {
    if (theme === MODE_DARK) {
      setTheme(MODE_LIGHT);
    } else {
      setTheme(MODE_DARK);
    }
  };

  useEffect(() => {
    const body = document.body;
    if (theme === MODE_DARK) {
      body.classList.add(CLASS_DARK);
    } else {
      body.classList.remove(CLASS_DARK);
    }
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ toggle, theme }}>
      {children}
    </ThemeContext.Provider>
  );
};

Provider.displayName = "ThemeProvider";
export const ThemeProvider = React.memo(Provider);
