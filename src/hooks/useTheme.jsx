import { useEffect } from "react";
import useLocalStorage from './useLocalStorage';

const useTheme = () => {
    const [theme, setTheme] = useLocalStorage("theme", "system");
    useEffect(() => {
        // Remove any previously added theme class to avoid stacking
        document.body.classList.remove("light", "dark", "solarized", "cyberpunk"); // Fixed typo

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

        // Clean up by removing any previously added theme class
        return () => {
            document.body.classList.remove("light", "dark", "solarized", "cyberpunk"); // Fixed typo
        };
    }, [theme]); // Effect will run whenever `theme` changes

};

export default useTheme;
