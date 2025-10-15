import { useState } from "react";
import LanguageContext from "../../context/LanguageContext";

export default function LanguageProvider({ children }) {
    const [language, setLanguage] = useState('en')

    const toggleLanguage = () => {
        setLanguage(prev => prev === 'en' ? 'id' : 'en')
    }

    const contextValue = { language, toggleLanguage };

    return (
        <LanguageContext.Provider value={contextValue}>
            {children}
        </LanguageContext.Provider>
    )
}