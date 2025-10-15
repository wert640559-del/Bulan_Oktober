import { useState } from "react";
import ThemeContext from "./ThemeContext";

export default function ThemeProvider({ children }){
    const [theme, setTheme] = useState("light")

    const toggleTheme = () => {
        setTheme(prev => prev === 'light' ? "dark" : "light")
    }

    const contextValue = { theme, toggleTheme};

    return (
        <div>
            <ThemeContext.Provider value={contextValue}>
                {children}
            </ThemeContext.Provider>
        </div>
    )
}