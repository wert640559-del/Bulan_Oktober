import { useEffect, useState } from "react";

export default function UserProfile(props) {
    const { userId } = props;
    const { photosId } = props;

    const [user, setUser] = useState(null);
    const [photo, setPhoto] = useState(null);
    const [loading, setLoading] = useState(null);

    useEffect(() => {
        setLoading(true);

    console.log(`fetching user data for userID: ${userId}`);

        // simulasi fetching data API
        fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
        .then((response) => response.json())
        .then((data) => {
            setUser(data);
            setLoading(false)
        })
        .catch(error => {
            console.error("error fetching user: ", error)
            setLoading(false)
        })

        fetch(`https://jsonplaceholder.typicode.com/photos/${photosId}`)
            .then((response) => response.json())
            .then((data) => {
                setPhoto(data);
                setLoading(false)
            })
            .catch(error => {
                console.log('error fetching photo: ', error)
                setLoading(false)
            })

    }, [photosId])

    if (loading) return <p>Memuat data pengguna</p>
    if (!user) return <p>Pengguna tidak ditemukan!</p>

    return (
        <div>
            <h2>Profil Pengguna</h2>
            <p>nama: {user.name}</p>
            <p>{user.email}</p>
            <p>{user.username}</p><br /><br />

            <h2>Gambar</h2>
            <img src={photo.url} alt="" />
            <p>{photo.title}</p>
        </div>
    )
}