import { useState } from "react";

export default function SyntheticEvent() {
    const [inputValue, setInputValue] = useState(''); 
    const [alasan, setAlasan] = useState('');

    const handleClick = (event) => {
        event.preventDefault();
        console.log('link diklik!');
        const alasan = prompt('apa alasan kamu mengklik linknya!');
        setAlasan(alasan);
    };

    const handleChange = (event) => {
        console.log('yang ditulis: ' + event.target.value);
        setInputValue(event.target.value);
    };

    return (
        <div style={{
            fontFamily: 'sans-serif',
            backgroundColor: '#fafafa',
            color: '#222',
            minHeight: '100vh',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '16px',
        }}>
            <h3 style={{ fontSize: '1.25rem' }}>Jangan Klik link ini!</h3>

            <a
                href="https://github.com/malfazakki/modul-react-programmer-pit/blob/master/2-State_Management_%26_Hooks/2.1-Event_Handling_dan_Forms.md"
                onClick={handleClick}
                style={{
                    color: '#0077cc',
                    textDecoration: 'none',
                    border: '1px solid #0077cc',
                    padding: '6px 12px',
                    borderRadius: '4px',
                    transition: '0.2s',
                }}
                onMouseEnter={(e) => {
                    e.target.style.backgroundColor = '#ED3F27';
                    e.target.style.color = '#fff';
                }}
                onMouseLeave={(e) => {
                    e.target.style.backgroundColor = '';
                    e.target.style.color = '#ED3F27';
                }}
            >
                link berbahaya
            </a>

            {alasan && (
                <p style={{
                    fontSize: '0.95rem',
                    color: '#444',
                    backgroundColor: '#eee',
                    padding: '6px 10px',
                    borderRadius: '4px',
                    textAlign: 'center',
                }}>
                    alasan kamu: "{alasan}", tidak bisa diterima!
                </p>
            )}

            <input
                type="text"
                value={inputValue}
                onChange={handleChange}
                placeholder="ketik sesuatu"
                style={{
                    padding: '6px 10px',
                    border: '1px solid #ccc',
                    borderRadius: '4px',
                    width: '220px',
                    outline: 'none',
                    fontSize: '1rem',
                }}
                onFocus={(e) => e.target.style.borderColor = '#0077cc'}
                onBlur={(e) => e.target.style.borderColor = '#ccc'}
            />

            <p style={{ color: '#333', fontSize: '0.95rem' }}>
                yang kamu ketik: <span style={{ fontWeight: 'bold' }}>{inputValue}</span>
            </p>
        </div>
    );
}
