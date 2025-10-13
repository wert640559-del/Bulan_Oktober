import { useState } from "react";
import { createContext } from "react";

export const ThemeContext = createContext(null)

export const ThemeProvider = ({ children }) =>  {
    const [theme, setTheme] = useState('light')

    const toggleTheme = () => {
        setTheme(prevTheme => (prevTheme === 'light' ? 'dark' : 'light'))
    }

    const contextValue = { theme, toggleTheme }
 
    return (
        <div>
            <ThemeContext.Provider value={contextValue}>
                {children}
            </ThemeContext.Provider>
        </div>
    )
}