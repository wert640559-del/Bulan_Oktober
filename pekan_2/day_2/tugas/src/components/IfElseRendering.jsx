import { useState } from "react";

export default function IfElse() {
  const [pesan, setPesan] = useState("");
  const [content, setContent] = useState(null);

  const handleChange = (event) => {
    setPesan(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (pesan === "Aku pintar dan aku bangga!") {
      setContent(<p style={{ color: "green" }}>Bagus! ✅</p>);
    } else {
      setContent(<p style={{ color: "red" }}>Kamu tidak menulis dengan benar ❌</p>);
    }
  };

  const formStyle = {
    fontFamily: "sans-serif",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    minHeight: "100vh",
    backgroundColor: "#f9f9f9",
    color: "#333",
  };

  const inputStyle = {
    padding: "10px",
    width: "280px",
    borderRadius: "6px",
    border: "1px solid #ccc",
    marginBottom: "10px",
    fontSize: "14px",
  };

  const buttonStyle = {
    padding: "8px 16px",
    borderRadius: "6px",
    border: "none",
    backgroundColor: "#333",
    color: "#fff",
    cursor: "pointer",
    fontSize: "14px",
    transition: "background 0.3s ease",
  };

  const buttonHover = (e) => (e.target.style.backgroundColor = "#555");
  const buttonLeave = (e) => (e.target.style.backgroundColor = "#333");

  return (
    <form onSubmit={handleSubmit} style={formStyle}>
      <h2>Tuliskan ini:</h2>
      <p>"Aku pintar dan aku bangga!"</p>
      <input
        type="text"
        value={pesan}
        onChange={handleChange}
        style={inputStyle}
        placeholder="Tulis di sini..."
      />
      <button
        type="submit"
        style={buttonStyle}
        onMouseOver={buttonHover}
        onMouseLeave={buttonLeave}
      >
        Submit
      </button>
      <div style={{ marginTop: "10px" }}>{content}</div>
    </form>
  );
}
