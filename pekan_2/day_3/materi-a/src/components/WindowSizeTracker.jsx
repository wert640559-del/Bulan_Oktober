import { useEffect, useState } from "react"

export default function WindowSizeTracker(){
    const [width, setWidth] = useState(window.innerWidth)
    const [height, setHight] = useState(window.innerHeight)

    useEffect(() => {
        const handleResize = () => {
            setWidth(window.innerWidth)
            setHight(window.innerHeight)
        }

        window.addEventListener("resize", handleResize);

        // clean up hapus event listener
        return () => {
            window.removeEventListener("resize", handleResize)
        }
    }, [width, height])

    return (
        <div>
            <h2>Ukuran Window Browser</h2>
            <p>lebar: {width}</p>
            <p>tinggi: {height}</p>
        </div>
    )
}