import { useEffect } from "react"
import { useState } from "react"

export default function Multiple(){
    const [count, setCount] = useState(0)
    const [title, setTitle] = useState('')

    useEffect(() => {
        console.log('Timer dimulai')
        const intervalId = setInterval(() => {
            setCount(prev => prev + 1)
        }, 1000)

        return() => {
            clearInterval(intervalId);
            console.log("Timer dibersihkan")
        };
    }, [])

    useEffect(() => {
        console.log(`judul halaman berubah menjadi: ${title}`)
        document.title = title;
    }, [title])

    useEffect(() => {
    const handleKeyDown = (e) => {
      console.log(`Tombol ${e.key} ditekan.`);
    };
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      console.log('Event listener keydown dihapus.');
    };
  }, []);
    return (
        <div>
            <h2>Komponen dengan Multiple Effects</h2>
            <p>Timer: {count}</p>
            
            <br /><br />

            <input type="text" value={title} onChange={(e) => setTitle(e.target.value)}/>

            
        </div>
    )
}