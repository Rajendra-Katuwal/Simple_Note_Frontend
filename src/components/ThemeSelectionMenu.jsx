import React, { useEffect } from "react";
import useLocalStorage from "../hooks/useLocalStorage";

const ThemeSelectionMenu = ({ className }) => {
  const [theme, setTheme] = useLocalStorage("theme", "system");
  const themes = ["light", "dark", "solarized", "cyberpunk", "dracula", "nord", "monokai", "forest", "neon", "autumn"];

  const handleChange = (event) => {
    setTheme(event.target.value);
    console.log("Selected Theme:", event.target.value);
  };

  useEffect(() => {
    // Remove any previously added theme class to avoid stacking
    themes.forEach((theme) => {
      document.body.classList.remove(theme);
    });

    if (theme !== "system") {
      // If the theme is not "system", apply the selected theme
      document.body.classList.add(theme);
    } else {
      // If the theme is "system", check the user's system preference
      if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
        document.body.classList.add("dark");
      } else {
        document.body.classList.add("light");
      }
    }
  }, [theme]);

  return (
    <div className={className}>
      <select
        name="themes"
        id="theme"
        value={theme}
        onChange={handleChange}
        className="appearance-none bg-bgCard border border-border py-2 px-4 rounded-md"
      >
        <option value="system">System</option>
        {themes.map((theme, index) => (
          <option key={index} value={theme}>
            {theme.charAt(0).toUpperCase() + theme.slice(1)}
          </option>
        ))}
      </select>
    </div>
  );
};

export default ThemeSelectionMenu;
