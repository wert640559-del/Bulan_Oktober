import { useContext } from "react"
import { ThemeContext } from "../../context/ThemeContex"

export default function ThemedParagraph() {
    const { theme } = useContext(ThemeContext)
    const paragraphStyle = {
        color: theme === 'light' ? '#000' : '#fff',
        backgroundColor: theme === 'light' ? '#fff' : '#222',
        padding: '10px',
        borderRadius: '5px'
    }

    return (
        <div>
            <p style={paragraphStyle}>
                kalimat yang akan berubah tema {theme}
            </p>
        </div>
    )
}