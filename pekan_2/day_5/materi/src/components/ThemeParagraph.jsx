import { useContext } from "react";
import { ThemeContext } from "../contex/ThemeContex";

export default function ThemedParagraph() {
  const { theme } = useContext(ThemeContext);
  const paragraphStyle = {
    color: theme === 'light' ? '#000' : '#fff',
    backgroundColor: theme === 'light' ? '#fff' : '#222',
    padding: '10px',
    borderRadius: '5px'
  };
  return (
    <p style={paragraphStyle}>
      Ini adalah paragraf dengan tema {theme}.
    </p>
  );
}