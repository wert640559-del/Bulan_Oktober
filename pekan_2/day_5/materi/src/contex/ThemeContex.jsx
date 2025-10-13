import { createContext, useState } from "react";

export const ThemeContext = createContext(null)

export const ThemeProvider = ({ children })=> {
    const [theme, setTheme ] = useState("dark")

    const toggleTheme = () => {
        return theme === "dark" ? setTheme("light") : setTheme("dark")
    }

    return <ThemeContext.Provider value={{ theme, toggleTheme}}>{children}</ThemeContext.Provider>
}

