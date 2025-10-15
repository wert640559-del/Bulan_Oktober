import { useContext } from "react";
import LanguageContext from "../../context/LanguageContext";
import NotificationContext from "../../context/NotificationContext";

export default function Header() {
  const {language, toggleLanguage} = useContext(LanguageContext);
  const { notifications, addNotification, clearNotifications } = useContext(NotificationContext)

  const texts = {
    en: { 
      title: "Welcome!", 
      notif: 'Notifications', 
      toggle: 'Change to Indonesian language', 
      add: 'Add Notification', 
      clear: 'Remove All',
      empty: 'No notifications'
    },
    id: { 
      title: 'Selamat Datang', 
      notif: 'Notifikasi', 
      toggle: 'Ganti ke bahasa Inggris', 
      add: 'Tambah Notifikasi', 
      clear: 'Hapus Semua',
      empty: 'Tidak ada notifikasi'
    }
  }

  const t = texts[language]

  return(
    <div className="header-content">
      <h2 className="header-title">{t.title}</h2>
      <div className="notification-info">
        {t.notif}: <span className="notification-count">{notifications.length}</span>
      </div>
      <div className="header-buttons">
        <button className="notification-add" onClick={() => addNotification('Pesan Baru!')}>
          {t.add}
        </button>
        <button className="notification-clear" onClick={clearNotifications}>
          {t.clear}
        </button>
        <button className="language-toggle" onClick={toggleLanguage}>
          {t.toggle}
        </button>
      </div>
      <div className="notification-list">
        <h3>{t.notif}</h3>
        {notifications.length > 0 ? (
          <ul>
            {notifications.map((notif, index) => (
              <li key={index} className="notification-item">
                {notif} yang ke-{index + 1}
              </li>
            ))}
          </ul>
        ) : (
          <p className="no-notification">{t.empty}</p>
        )}
      </div>
    </div>
  )
}