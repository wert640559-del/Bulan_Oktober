import { useState } from "react";

export default function Login(){
    const [isLoggedIn, setIsLoggedIn] = useState(false)

    const handleLoginClick = () => {
        setIsLoggedIn(true);
    }

    const handleLogoutClick = () => {
        
    }
}