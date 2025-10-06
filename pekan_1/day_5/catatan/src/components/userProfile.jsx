import React, {useState} from 'react'

function UserProfile() {
    const [name, setName] = useState('Muhammad Harits');
    const [jurusan, setJurusan] = useState('Programmer');
    const [ubah, setUbah] = useState(false);
    
    return (
        <div>
            <h1>Profil Siswa</h1>

            {
                ubah ? (
                    <div>
                        <input type="text" value={name} onChange={(e) => setName(e.target.value)}/>
                        <input type="text" value={jurusan} onChange={(e) => setJurusan(e.target.value)}/>
                        <button onClick={() => setUbah(false)}>Simpan</button>
                    </div>
                ): (
                    <div>
                        
                    </div>
                )
            }
        </div>
    )
}

export default UserProfile;