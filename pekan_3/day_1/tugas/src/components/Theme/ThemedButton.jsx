import { useContext } from "react";
import ThemeContext from "../../context/ThemeContext";
import LanguageContext from "../../context/LanguageContext";

export default function ThemedButton() {
  const { theme, toggleTheme } = useContext(ThemeContext);
  const {language} = useContext(LanguageContext)

  // Hapus styling inline karena sudah ditangani CSS
  const texts = {
    en: { button: 'Change theme'},
    id: { button: 'Ganti tema'}
  }

  const t = texts[language]

  return (
    <button className="themed-button" onClick={toggleTheme}>
      {t.button} ({theme})
    </button>
  );
}