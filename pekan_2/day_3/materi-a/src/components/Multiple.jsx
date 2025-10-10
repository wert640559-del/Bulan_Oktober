import { useEffect, useState } from "react"

export default function MultiEffectComponent(){
    const [name, setName] = useState('')
    const [count, setCount] = useState(0)


    // mengganti judul halaman
    useEffect(() => {
        document.title = `Count: ${count}`;
    } , [count])

    useEffect(()=> {
        document.title = `${name}`;
    } , [name])

    useEffect(()=> {
        const handleKeyDown = (e) => {
            console.log(`tombol ${e.key}`)
        }
        window.addEventListener('keydown', handleKeyDown)

        return () => {
            window.removeEventListener('keydown', handleKeyDown)
        }
    }, []) 


    return (
        <div>
            <h2>Kompenent dengan Multiple useEffect</h2>
            <p>count; {count}</p>
            <button onClick={() => setCount(count + 1)}>tambah</button>

            <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Masukkan nama anda!" />
            <p>nama: {name}</p>
        </div>
    )
}