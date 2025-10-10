import { useEffect, useState } from "react"

export default function Timer() {
    const [count, setCount] = useState(0)

    useEffect(() => {
        const intervalId = setInterval(() => {
            setCount( prev => prev + 1)
        }, 1000);

        return () => {
            clearInterval(intervalId);
        }
    }, [count])

    return(
        <>
            <h2>Aplikasi Timer Sederhana</h2>
            <p>Timer: {count} </p>
        </>
    )
}