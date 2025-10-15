import { useContext } from "react";
import ThemeContext from "../../context/ThemeContext";

export default function ThemedImage() {
  const {theme} = useContext(ThemeContext)

  return (
    <img 
      className="themed-image"
      src={theme === 'light' ? '/emas.svg' : '/gelap.png'} 
      alt="Themed illustration"
    />
  )
}