import useLocalStorage from "../hooks/useLocalStorage";

export default function ThemeSwitcher() {
    const [theme, setTheme] = useLocalStorage("theme", "light");

    const toggleTheme = () => {
        setTheme((prev) => (prev === "light" ? "dark" : "light"))
    }

    const styles = {
        backgroundColor: theme === 'light' ? '#f8fafc' : '#0f172a',
        color: theme === 'light' ? '#0f172a' : '#f8fafc',
        minHeight: '100vh',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        transition: 'background-color 0.3s ease, color 0.3s ease'
    }

    return (
        <div style={styles}>
            <h2>Tema Saat ini: {theme}</h2>
            <button onClick={toggleTheme}>
                Ganti ke Tema {theme === 'light' ? "Dark" : "Light"}
            </button>
        </div>
    )
}