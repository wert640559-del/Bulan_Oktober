import { useEffect } from "react";
import { useState } from "react";

export default function WindowSizeTracker(){
    const [height, setHeight] = useState(window.innerHeight)
    const [width, setwidth] = useState(window.innerWidth)
    const [infoDevice, setInfoDevice] = useState('')

    useEffect(() => {
        const handleResize = () => {
            setwidth(window.innerWidth);
            setHeight(window.innerHeight);
        }

        window.addEventListener('resize', handleResize)
        console.log(`Event Listener "resize ditambahkan"`)

        return () => {
            window.removeEventListener('resize', handleResize)
            console.log(`Event listener "resize" dihapus`)
        }
    }, [])

    useEffect(() => {
        if (width < 320) {
            setInfoDevice("Hape Nokia")
        } else if (width < 768) {
            setInfoDevice("Smartphone")
        } else if (width < 1024) {
            setInfoDevice("Tablet")
        } else {
            setInfoDevice("Laptop atau PC")
        }
    }, [width])

    return (
        <div>
            <h2>Ukurang jendela Browser kamu:</h2>
            <p>Lebar: {width}</p>
            <p>Tinggi: {height}</p>
            <p>kamu menggunakan: {infoDevice}</p>
        </div>
    )
}