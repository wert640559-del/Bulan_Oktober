import { useState, useEffect } from "react"

export default function UserProfile({userId}) {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(false)

    
    useEffect(() => {
        setLoading(true);
        
        fetch(`https://api.thecatapi.com/v1/images/search`)
        .then(response => response.json())
        .then((data) => {
            setUser(data[0])
                setLoading(false)
            })
            .catch((error) => {
                console.error(`Error fetching data: ${error}`)
                setLoading(false)
            }
        )
    }, [userId])
    
    if (loading) return <p>Sedang memuat halaman</p>
    if (!user) return <p>pengguna tidak ditemukan</p>
    return (
        <div>
            <h2>Profile Pengguna</h2>
            <img src={user.url} alt="" style={{height: '300px'}}/>
        </div>
    )
}