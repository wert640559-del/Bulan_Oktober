import { useRef } from "react";

export default function UncontrolledComponents() {
    const inputRefNama = useRef();
    const inputRefJurusan = useRef();
    const inputRefAsal = useRef();

    const handleSubmit = (event) => {
        event.preventDefault();
        alert('Assalamualaikum, ' + inputRefNama.current.value + ', jurusan kamu: ' + inputRefJurusan.current.value + ', asal kamu dari: ' + inputRefAsal.current.value);
    }

    return (
        <form 
            onSubmit={handleSubmit} 
            style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '10px',
                maxWidth: '350px',
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
                Siapa Kamu? 
                <span style={{ fontSize: '13px', color: '#6b7280' }}>
                    {' '} (Uncontrolled Component)
                </span>
            </h2>

            <label style={{ display: 'flex', flexDirection: 'column', fontSize: '14px', color: '#374151' }}>
                Nama:
                <input 
                    type="text" 
                    ref={inputRefNama} 
                    style={{
                        padding: '8px',
                        border: '1px solid #d1d5db',
                        borderRadius: '6px',
                        outline: 'none',
                        fontSize: '14px'
                    }}
                />
            </label>

            <label style={{ display: 'flex', flexDirection: 'column', fontSize: '14px', color: '#374151' }}>
                Jurusan:
                <input 
                    type="text" 
                    ref={inputRefJurusan}
                    style={{
                        padding: '8px',
                        border: '1px solid #d1d5db',
                        borderRadius: '6px',
                        outline: 'none',
                        fontSize: '14px'
                    }}
                />
            </label>

            <label style={{ display: 'flex', flexDirection: 'column', fontSize: '14px', color: '#374151' }}>
                Asal:
                <select 
                    ref={inputRefAsal}
                    style={{
                        padding: '8px',
                        border: '1px solid #d1d5db',
                        borderRadius: '6px',
                        outline: 'none',
                        fontSize: '14px'
                    }}
                >
                    <option value="">Pilih Asal Kamu</option>
                    <option value="Sumatera">Sumatera</option>
                    <option value="Jawa">Jawa</option>
                    <option value="Kalimantan">Kalimantan</option>
                    <option value="Sulawesi">Sulawesi</option>
                    <option value="Maluku">Maluku</option>
                    <option value="Nusa Tenggara">Nusa Tenggara</option>
                    <option value="Bali">Bali</option>
                    <option value="Papua">Papua</option>
                    <option value="Luar Negeri">Luar Negeri</option>
                </select>
            </label>

            <button 
                type="submit"
                style={{
                    padding: '10px',
                    backgroundColor: '#111827',
                    color: '#fff',
                    border: 'none',
                    borderRadius: '6px',
                    cursor: 'pointer',
                    marginTop: '10px',
                    fontSize: '14px'
                }}
            >
                Submit
            </button>
        </form>
    )
}
