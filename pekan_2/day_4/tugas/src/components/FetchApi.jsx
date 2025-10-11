import { useEffect } from "react"
import { useState } from "react"

export default function FetchDataComponent() {
    const [data, setData] = useState(null)
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)

    const fetchData = async () => {
        try {
            const response = await fetch('https://meowfacts.herokuapp.com/')
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`)
            }
            const result = await response.json()
            setData(result)
        } catch (err) {
            setError(err)
        } finally {
            setLoading(false)
        }
    }

    useEffect(() => {

        fetchData();
    }, [])

    // ini untuk nomor 3
    if (loading) return <p>Sedang memuat...</p>                 // ini untuk nomor 3
    if (error) return <p>Terjadi kesalahan: {error.message}</p> // ini untuk nomor 3

    const handleClick = () => {
        fetchData()
    }

    return (
        <div>
            <h2>Data Tentang Kucing</h2>
            <h3>{data?.data[0]}</h3>
            <button onClick={handleClick}>Kucing</button>
        </div>
    )
}