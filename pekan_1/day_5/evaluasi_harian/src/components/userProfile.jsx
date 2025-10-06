import React, {useState} from 'react'

export default function UserProfile() {
    const [name, setName] = useState('Muhammad Harits');
    const [jurusan, setJurusan] = useState('Programmer');
    const [email, setEmail] = useState('wert640559@gmail.com');
    const [ubah, setUbah] = useState(false);
    
    return (
        <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', textAlign: 'center'}}>
            <h1>Profil Siswa</h1>

            {
                ubah? (
                    <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', textAlign: 'center', padding: '10px 100px', gap: '10px'}}>
                        <label htmlFor="name">Nama:</label>
                        <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
                        <label htmlFor="jurusan">Jurusan:</label>
                        <input type="text" value={jurusan} onChange={(e) => setJurusan(e.target.value)} />
                        <label htmlFor="email">Email:</label>
                        <input type="text" value={email} onChange={(e) => setEmail(e.target.value)}/>
                        <button onClick={() => setUbah(false)}>Simpan</button>
                        
                    </div>
                ) : (
                    <div>
                        <p>nama: {name}</p>
                        <p>jurusan: {jurusan}</p>
                        <p>email: {email}</p>
                        <button onClick={() => setUbah(true)}>ubah</button>
                    </div>
                )
            }
        </div>
    )
}
