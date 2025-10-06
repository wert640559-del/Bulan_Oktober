import { useState } from "react";

export default function ContactForm(){
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        alamat: '',
        jurusan: '',
        kegantengan: ''
    });

    const handleChange = (e) => {
        const {name, value} = e.target;
        setFormData(prevFormData => {
            return {
                ...prevFormData,
                [name] : value
            }
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Data yang disubmit:', formData);
        if (formData.kegantengan === "⭐⭐⭐⭐⭐") {
            alert(`maaf anda terlalu ganteng`)
        } else {
            alert(`Terima Kasih ${formData.firstName} ${formData.lastName}! Data anda telah disubmit. Dengan email ${formData.email}`)
        }
    }

    const styles = {
        container: {
            display: 'flex',
            justifyContent: "center",
            alignItems: 'center',
            minHeight: '100vh',
            padding: '40px',

        },
        form: {
            padding: '30px',
            borderRadius: '12px',
            boxShadow: '0 2px 10px rgba(0,0,0,0,1)',
            width: '100%',
            maxWidth: '450px',
            fontFamily: "'Segoe UI', Sans-serif",
            backgroundColor: 'white'
        },
        title: {
            textAlign: 'center',
            marginBottom: '20px',
            color: '#333',
        },
        input: {
            width: "100%",
            padding: "10px",
            marginBottom: "18px",
            border: "1px solid #ccc",
            borderRadius: "6px",
            fontSize: "14px",
        },
        select: {
            width: "100%",
            padding: "10px",
            marginBottom: "18px",
            border: "1px solid #ccc",
            borderRadius: "6px",
            fontSize: "14px",
        },
        button: {
            width: "100%",
            padding: "10px",
            backgroundColor: "#007bff",
            border: "none",
            borderRadius: "6px",
            color: "white",
            fontSize: "16px",
            cursor: "pointer"
        },
        preview: {
            marginTop: "25px",
            paddingTop: "15px",
            borderTop: "1px solid #eee",
            fontSize: "14px",
            color: "#333"
        },
        previewTitle: {
            marginBottom: "10px",
            color: "#007bff",
            fontSize: "16px"
        }
    }

    return(
        <div style={styles.container}>
            <form onSubmit={handleSubmit} style={styles.form}>
                <h2 style={styles.title}>Formulir Kontak</h2>

                <label style={styles.label}>Nama Depan</label>
                <input type="text" name="firstName" value={formData.firstName} onChange={handleChange} style={styles.input}/>

                <label style={styles.label}>Nama Belakang</label>
                <input type="text" name="lastName" value={formData.lastName} onChange={handleChange} style={styles.input}/>

                <label style={styles.label}>Email</label>
                <input type="email" name="email" value={formData.email} onChange={handleChange} style={styles.input}/>

                <label style={styles.label}>Alamat</label>
                <input type="text" name="alamat" value={formData.alamat} onChange={handleChange} style={styles.input}/>

                <label style={styles.label}>Jurusan</label>
                <input type="text" name="jurusan" value={formData.jurusan} onChange={handleChange} style={styles.input}/>

                <label style={styles.label}>Tingkat Kegantengan</label>
                <select name="kegantengan" value={formData.kegantengan} onChange={handleChange} style={styles.select}>
                    <option value="">-- Pilih --</option>
                    <option value="⭐">⭐</option>
                    <option value="⭐⭐">⭐⭐</option>
                    <option value="⭐⭐⭐">⭐⭐⭐</option>
                    <option value="⭐⭐⭐⭐">⭐⭐⭐⭐</option>
                    <option value="⭐⭐⭐⭐⭐">⭐⭐⭐⭐⭐</option>
                </select>

                <button type="submit" style={styles.button}>Kirim</button>

                <div style={styles.preview}>
                    <h3 style={styles.previewTitle}>Data Saat Ini</h3>
                    <p><strong>Nama:</strong> {formData.firstName} {formData.lastName}</p>
                    <p><strong>Email:</strong> {formData.email}</p>
                    <p><strong>Alamat:</strong> {formData.alamat}</p>
                    <p><strong>Jurusan:</strong> {formData.jurusan}</p>
                    <p><strong>Kegantengan:</strong> {formData.kegantengan}</p>
                </div>
            </form>
        </div>
    )
}