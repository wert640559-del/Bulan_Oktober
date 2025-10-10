import { useEffect, useState } from "react";

export default function TimerSederhana(){
    const [count, setCount] = useState(0)

    useEffect(() => {
        console.log('timer dimulai')

        const intervalid  = setInterval(() => {
            setCount((prevCount) => prevCount + 1);
        }, 1000)

        return () => {
            clearInterval(intervalid);
            console.log('timer dibersihkan')
        }
    }, [])

    return (
        <div>
            <h2>Hitung: {count} </h2>
        </div>
    )
}