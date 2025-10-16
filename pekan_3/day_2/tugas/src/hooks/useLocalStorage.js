import { useEffect } from "react";
import { useState } from "react";

export default function useLocalStorage(key, initialValue) {
    const [storedValue, setStoredValue] = useState(() => {
        try {
            const item = localStorage.getItem(key);
            return item ? JSON.parse(item) : initialValue;
        } catch (error) {
            console.error("Error membaca localStorage", error)
            return initialValue
        }
    });

    useEffect(() => {
        try {
            localStorage.setItem(key, JSON.stringify(storedValue));
        } catch (error) {
            console.error("Error menyimpan di localStorage", error)
        }
    }, [key, storedValue])

    return [storedValue, setStoredValue]
}