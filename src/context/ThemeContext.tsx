import { createContext, useState, ReactNode, useEffect } from "react";

export type ITheme = "light" | "dark";

interface ThemeContextType {
  theme: ITheme;
  setTheme?: (value: ITheme) => void;
}

export const ThemeContext = createContext<Partial<ThemeContextType>>({});

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
  const [theme, setTheme] = useState<ITheme>(
    (localStorage.getItem("theme") as ITheme) || "dark"
  );

  useEffect(() => {
    console.log("Selected Theme : ", theme);
    document.getElementById("app")?.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
