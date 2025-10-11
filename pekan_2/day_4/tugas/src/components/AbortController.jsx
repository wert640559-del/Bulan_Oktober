import { useEffect } from "react"
import { useState } from "react"

export default function AbortFetchComponent() {
    const [data, setData] = useState(null)
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)

    useEffect(() => {
        const abortController = new AbortController();
        const signal = abortController.signal;

        const fetchData = async () => {
            try {
                const response = await fetch('https://api.alquran.cloud/v1/ayah/262', { signal })
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`)
                }
                const result = await response.json()
                setData(result)
            } catch (err) {
                if (err.name === 'AbortError') {
                    console.log('Fetch dibatalkan')
                } else {
                    setError(err)
                }
            } finally {
                setLoading(false)
            }
        }

        fetchData()

        return () => {
            abortController.abort()
            console.log('permintaan dibatalkan saat cleanup')
        }
    }, [])

    if (loading) return  <p>Sedang memuat data...</p>
    if (error) return <p>terjadi kesalahan: {error.message}</p>

    return (
        <div>
            <h2>Data Fetch dengan abortController</h2>
            <h3>{data?.data?.surah?.name}</h3>
            <h5>{data?.data?.text}</h5>
        </div>
    )
}