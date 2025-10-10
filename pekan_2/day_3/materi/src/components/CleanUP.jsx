import { useEffect, useState } from "react";

export default function WindowSizeTracker() {
    const [width, setWidth] = useState(window.innerWidth)
    const [height, setHeight] = useState(window.innerWidth)

    useEffect(() => {
        const handleResize = () => {
            setWidth(window.innerWidth)
            setHeight(window.innerHeight)
        }

        window.addEventListener('resize',handleResize)
        console.log('Event Listener resize ditambahkan ')

        return () => {
            window.removeEventListener("resize", handleResize)
            console.log("Event Listener 'resize' dihapus")
        }
    }, [])
}