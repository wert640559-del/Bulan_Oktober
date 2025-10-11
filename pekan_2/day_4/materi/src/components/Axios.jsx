import { useEffect, useState } from "react"
import axios from 'axios';

export default function AxiosDataComponent() {
    const [data, setData] = useState(null)
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('https://jsonplaceholder.typicode.com/users/1')
                setData(response.data);
            } catch (err) {
                setError(err) 
            } finally {
                setLoading(false)
            }
        }

        fetchData();
    }, [])

    if (loading) return <p>Memuat data pengguna...</p>
    if (error) return <p>Terjadi kesalahan: {error.message}</p>

    return (
        <div>
            <h1>Data dari Axios</h1>
            <h3>Nama: {data.name}</h3>
            <h3>Email: {data.email}</h3>
            <p>Telepon: {data.phone}</p>
        </div>
    )
}