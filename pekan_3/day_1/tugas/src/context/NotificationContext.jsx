import React from "react";

const NotificationContext = React.createContext({
    notifications: [],
    addNotification: () => {},
    clearNotifications: () => {}
})

export default NotificationContext;