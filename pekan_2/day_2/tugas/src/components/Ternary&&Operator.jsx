import { useState } from "react";

function ButtonTema({ onClick, isDarkMode }) {
  const buttonStyle = {
    padding: "10px 20px",
    border: "none",
    borderRadius: "8px",
    cursor: "pointer",
    backgroundColor: isDarkMode ? "#f0f0f0" : "#333",
    color: isDarkMode ? "#333" : "#f0f0f0",
    fontSize: "14px",
    fontWeight: "bold",
    transition: "all 0.3s ease",
  };

  return (
    <button onClick={onClick} style={buttonStyle}>
      {isDarkMode ? "☀️ Terang" : "🌙 Gelap"}
    </button>
  );
}

export default function DarkMode() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const containerStyle = {
    height: "100vh",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: isDarkMode ? "#1e1e1e" : "#f9f9f9",
    color: isDarkMode ? "#f9f9f9" : "#1e1e1e",
    transition: "all 0.4s ease",
    fontFamily: "sans-serif",
  };

  const textStyle = {
    marginBottom: "10px",
  };

  return (
    <div style={containerStyle}>
      <h2 style={textStyle}>Pilih tema terang atau gelap</h2>
      <p style={textStyle}>
        {isDarkMode ? "Mode Gelap Aktif" : "Mode Terang Aktif"}
      </p>

      <ButtonTema
        isDarkMode={isDarkMode}
        onClick={() => setIsDarkMode(!isDarkMode)}
      />
    </div>
  );
}
