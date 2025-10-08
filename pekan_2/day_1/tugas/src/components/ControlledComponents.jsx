import { useState } from "react";

export default function ControlledComponents() {
    const [komentar, setKomentar] = useState('')

    const handleChange = (event) =>{
        setKomentar(event.target.value)
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        if (komentar === '') {
            alert('jangan kosongkan komentar')
        } else {
            alert('komentar kamu masih positif, berikan komentar negatif')
        }
        setKomentar('')
    }

    return (
        <form 
            onSubmit={handleSubmit}
            style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '10px',
                maxWidth: '400px',
                margin: '40px auto',
                padding: '20px',
                border: '1px solid #e5e7eb',
                borderRadius: '10px',
                backgroundColor: '#f9fafb',
                fontFamily: 'sans-serif'
            }}
        >
            <h2 style={{ 
                fontSize: '20px', 
                color: '#111827', 
                marginBottom: '10px',
                textAlign: 'center' 
            }}>
                Silahkan berikan Komentar tentang web ini!{" "}
                <span style={{ fontSize: '13px', color: '#6b7280' }}>
                    (Controlled Component)
                </span>
            </h2>

            <label style={{ display: 'flex', flexDirection: 'column', fontSize: '14px', color: '#374151' }}>
                Komentar:
                <textarea 
                    value={komentar} 
                    onChange={handleChange} 
                    placeholder="Berikan komentar negatif anda!"
                    style={{
                        padding: '8px',
                        border: '1px solid #d1d5db',
                        borderRadius: '6px',
                        fontSize: '14px',
                        outline: 'none',
                        resize: 'vertical',
                        minHeight: '80px',
                    }}
                ></textarea>
            </label>

            <p style={{
                color: '#4b5563',
                backgroundColor: '#f3f4f6',
                padding: '8px',
                borderRadius: '6px',
                minHeight: '24px'
            }}>
                {komentar}
            </p>

            <button 
                type="submit"
                style={{
                    padding: '10px',
                    backgroundColor: '#111827',
                    color: '#fff',
                    border: 'none',
                    borderRadius: '6px',
                    cursor: 'pointer',
                    marginTop: '5px',
                    fontSize: '14px'
                }}
            >
                Kirim
            </button>
        </form>
    )
}
