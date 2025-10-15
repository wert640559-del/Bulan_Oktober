import { useContext, useState } from "react";
import LanguageContext from "../../context/LanguageContext";
import useUserContext from "../../hooks/useUserContext";

export default function UserInfoDisplay() {
  const { user, login, logout } = useUserContext();
  const [username, setUsername] = useState("");
  const {language} = useContext(LanguageContext)

  const handleSubmit = (e) => {
    e.preventDefault();
    if (username.trim()) login(username);
  };

  const texts = {
    en: { p: 'Welcome', title: 'Application with Context API'},
    id: { p: 'Selamat Datang', title: 'Aplikasi Dengan Context api'}
  }

  const t = texts[language]

  return (
    <div className="user-info-content">
      <h2 className="user-info-title">{t.title}</h2>
      <p className="user-info-welcome">{t.p}, {user?.name || "Guest"}</p>
      {user.isLoggedIn ? (
        <button className="user-logout-button" onClick={logout}>Logout</button>
      ) : (
        <form className="user-info-form" onSubmit={handleSubmit}>
          <input
            className="user-info-input"
            type="text"
            value={username}
            placeholder="Enter username"
            onChange={(e) => setUsername(e.target.value)}
          />
          <button className="user-info-button" type="submit">Login</button>
        </form>
      )}
    </div>
  );
}