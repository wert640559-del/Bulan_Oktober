import { useState } from "react";

export default function UserProfile() {

    const [name, setName] = useState('');
    const [age, setAge] = useState(0);
    const [isEditing, setIsEditing] = useState(false);

    return (
        <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', textAlign: 'center'}}>
            <h2>Profil Pengguna</h2>

            {isEditing ? (
                <div >
                    <form action="" style={{display: 'flex', flexDirection: 'column', textAlign: 'left', gap: '10px', width: '300px', margin: 'auto'}}>
                        <label htmlFor="name">Nama</label>
                    <input type="text" value={name} onChange={(e) => setName(e.target.value)}/>
                    <label htmlFor="age">Umur</label>
                    <input type="number" value={age} onChange={(e) => setAge(e.target.value)}/>
                    <button onClick={() => setIsEditing(false)}>Simpan</button>
                    </form>
                </div>
            ): (
                <div>
                    <p>nama Pengguna: {name}</p>
                    <p>umur Pengguna: {age}</p>
                    <button onClick={() => setIsEditing(true)}>edit</button>
                </div>
            )}
        </div>
    )
}