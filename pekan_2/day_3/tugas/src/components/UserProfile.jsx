import { useEffect } from "react"
import { useState } from "react"

export default function UserProfile({userId}){
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        setLoading(true);
        console.log(`Fetching user data for userId: ${userId}`)

        fetch(`https://randomuser.me/api/`)
            .then(response => response.json())
            .then((data) => {
                setUser(data)
                setLoading(false)
            })
            .catch((error) => {
                console.error('Error fetching user: ', error)
                setLoading(false)
            }) 
    }, [userId])

    if (loading) return <p>Sedang Loading...</p>
    if (!user) return <p>Pengguna tidak ditemukan</p>

    return (
        <div>
            <h2>Profil User</h2>
            <p>Nama: {user.results[0].name.first}</p>
            <p>Umur: {user.results[0].dob.age}</p>
            <p>Email: {user.results[0].email}</p>
            <p>Kota: {user.results[0].location.city}</p>
            <p>Negara: {user.results[0].location.country}</p>
            {/* <img src={user.results[0].picture.large} alt="" /> */}
        </div>
    )
}