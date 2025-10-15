import { useState } from "react";
import NotificationContext from "../../context/NotificationContext";

export default function NotificationProvider({ children }) {
    const [notifications, setNotifications] = useState([])

    const addNotification = (message) => {
        setNotifications(prev => [...prev, message])
    }

    const clearNotifications = () => {
        setNotifications([])
    }

    const contextValue = {notifications, addNotification, clearNotifications}

    return (
        <NotificationContext.Provider value={contextValue}>
            {children}
        </NotificationContext.Provider>
    )
}