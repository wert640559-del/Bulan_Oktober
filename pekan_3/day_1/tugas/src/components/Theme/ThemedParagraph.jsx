import { useContext } from "react";
import ThemeContext from "../../context/ThemeContext";
import LanguageContext from "../../context/LanguageContext";

export default function ThemedParagraph() {
  const {theme} = useContext(ThemeContext)
  const {language} = useContext(LanguageContext)

  // Hapus styling inline karena sudah ditangani CSS variables
  const texts = {
    en: { 
      terang: 'In light theme: text becomes bright green, background becomes dark green.', 
      gelap: 'In dark theme: text turns dark green, background turns light green'
    },
    id: { 
      terang: 'Tema terang: teks menjadi hijau terang, background menjadi hijau gelap', 
      gelap: 'Tema gelap: teks menjadi hijau gelap, background menjadi hijau terang'
    }
  }

  const t = texts[language]

  return (
    <p className="themed-paragraph">
      {theme === 'light' ? t.terang : t.gelap}
    </p>
  )
}