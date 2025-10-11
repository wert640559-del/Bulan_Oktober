import { useEffect, useState } from "react"
import axios from "axios"

export default function AxiosDataComponent() {
    const [data, setData] = useState(null)
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)

    const fetchData = async () => {
        setLoading(true)
        try {
            // Ambil dua data sekaligus
            const [meowResponse, emojiResponse] = await Promise.all([
                axios.get('https://meowfacts.herokuapp.com/'),
                axios.get('https://emojihub.yurace.pro/api/random')
            ])

            // Gabungkan hasilnya
            const result = {
                fact: meowResponse.data.data[0],
                emoji: emojiResponse.data.name,
                emojiImg: emojiResponse.data.htmlCode
            }

            setData(result)
        } catch (err) {
            setError(err)
        } finally {
            setLoading(false)
        }
    }

    useEffect(() => {
        fetchData()
    }, [])

    if (loading) return <p>Sedang memuat...</p>
    if (error) return <p>Terjadi kesalahan: {error.message}</p>

    return (
        <div style={{ textAlign: "center" }}>
            <h2>Data Tentang Kucing & Emoji</h2>
            <p>{data?.fact}</p>
            <h1 dangerouslySetInnerHTML={{ __html: data?.emojiImg }}></h1>
            <p>{data?.emoji}</p>
            <button onClick={fetchData}>Ambil Data Baru</button>
        </div>
    )
}
