import React, { useEffect, useState } from "react";
import ThemeContext from "../../context/ThemeContext";

export default function ThemeProvider({ children }) {
    const [theme, setTheme] = useState('light')

    const toggleTheme = () => {
        setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'))
    }

    useEffect(() => {
        // Set data-theme attribute on html element instead of inline styles
        document.documentElement.setAttribute('data-theme', theme);
        
        // Remove the inline body styles since we're using CSS variables
        // document.body.style.backgroundColor = theme === 'light' ? '#fff' : '#222';
        // document.body.style.color = theme === 'light' ? '#222' : '#fff';
        // document.body.style.transition = '0.3s';
    }, [theme])
    
    return (
        <ThemeContext.Provider value={{theme, toggleTheme}}>
            {children}
        </ThemeContext.Provider>
    )
}