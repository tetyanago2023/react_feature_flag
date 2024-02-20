import React from "react";
import useLocalStorage from "./useLocalStorage";
import './theme.css';

const LightDarkMode = () => {
    const [theme, setTheme] = useLocalStorage("theme", "dark");

    const handleToggleTheme = () => {
        setTheme(theme === "dark" ? "light" : "dark");
    }

    return (
        <div className="light-dark-mode" data-theme={theme}>
            <div className="container">
                <p>Hi all!</p>
                <button onClick={handleToggleTheme}>Change Theme</button>
            </div>
        </div>
    );
}

export default LightDarkMode;
