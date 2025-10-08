import { useState } from "react"

export default function FormulirPendaftaran() {
    const [nama, setNama] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [emailError, setEmailError] = useState('')
    const [passwordError, setPasswordError] = useState('')

    const handleInputName = (event) => {
        const newName = event.target.value;
        setNama(newName);
    } 

    const validateEmail = (email) => {
        if (!email.includes('@')) {
            setEmailError("Email harus mengandung karakter '@'");
        } else {
            setEmailError('')
        }
    }
    const handleInputEmail = (event) => {
        setEmail(event.target.value);
        validateEmail(event.target.value)
    }

    const validatePassword = (password) => {
        if (password.length < 8) {
            setPasswordError('Password kamu jangan kurang dari 8 karakter ya!')
        } else {
            setPasswordError('')
        }
    }
    const handleInputPassword = (event) => {
        const newPassword = event.target.value;
        setPassword(newPassword)
        validatePassword(newPassword)
    }

    const handleSubmit = (event) => {
        event.preventDefault();

        validateEmail(email);
        validatePassword(password)

        if (!emailError && !passwordError && nama && email && password) {
            alert('Formulir berhasil disubmit!')
            console.log({ nama, email, password })
        } else {
            alert('Mohon perbaiki kesalahan dalam formulir.')
        }

        setNama('');
        setEmail('')
        setPassword('')
    };

    return (
        <form 
            onSubmit={handleSubmit}
            style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '15px',
                maxWidth: '400px',
                margin: '50px auto',
                padding: '25px',
                border: '1px solid #e5e7eb',
                borderRadius: '10px',
                backgroundColor: '#f9fafb',
                fontFamily: 'sans-serif',
                boxShadow: '0 2px 6px rgba(0,0,0,0.05)'
            }}
        >
            <h2 style={{
                fontSize: '22px',
                color: '#111827',
                textAlign: 'center',
                marginBottom: '10px'
            }}>
                Form Login
            </h2>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '5px' }}>
                <label style={{ fontSize: '14px', color: '#374151' }}>
                    Username:
                </label>
                <input 
                    type="text" 
                    value={nama} 
                    onChange={handleInputName}
                    style={{
                        padding: '8px',
                        borderRadius: '6px',
                        border: '1px solid #d1d5db',
                        outline: 'none',
                        fontSize: '14px'
                    }}
                />
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '5px' }}>
                <label style={{ fontSize: '14px', color: '#374151' }}>
                    Alamat Email:
                </label>
                <input 
                    type="text" 
                    value={email} 
                    onChange={handleInputEmail}
                    style={{
                        padding: '8px',
                        borderRadius: '6px',
                        border: '1px solid #d1d5db',
                        outline: 'none',
                        fontSize: '14px'
                    }}
                />
                {emailError && (
                    <p style={{ color: 'red', fontSize: '12px', margin: 0 }}>
                        {emailError}
                    </p>
                )}
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '5px' }}>
                <label style={{ fontSize: '14px', color: '#374151' }}>
                    Password:
                </label>
                <input 
                    type="password" 
                    value={password} 
                    onChange={handleInputPassword}
                    style={{
                        padding: '8px',
                        borderRadius: '6px',
                        border: '1px solid #d1d5db',
                        outline: 'none',
                        fontSize: '14px'
                    }}
                />
                {passwordError && (
                    <p style={{ color: 'red', fontSize: '12px', margin: 0 }}>
                        {passwordError}
                    </p>
                )}
            </div>

            <button 
                type="submit"
                style={{
                    backgroundColor: '#111827',
                    color: '#fff',
                    border: 'none',
                    borderRadius: '6px',
                    padding: '10px',
                    fontSize: '14px',
                    cursor: 'pointer',
                    transition: 'background 0.2s ease'
                }}
                onMouseEnter={(e) => e.target.style.backgroundColor = '#1f2937'}
                onMouseLeave={(e) => e.target.style.backgroundColor = '#111827'}
            >
                Login
            </button>
        </form>
    )
}
