import { useState } from "react";

export default function ContactForm(){
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: ''
    })

    const handleChange = (event) => {
        const {name, value} = event.target;
        setFormData(prevFormData => ({
            ...prevFormData, 
            [name]: value
        }))
    }

    const handleSubmit = (e) => {
        e.preventDefault();  // biar ga otomatis refresh
        console.log('Data yang disubmit:', formData);
        alert(`Terima Kasih ${formData.firstName} ${formData.lastName}! Data anda telah disubmit. Dengan email ${formData.email}`)
    }
    return (
        <form onSubmit={handleSubmit}>
            <h1>Contact Form</h1>

            <div>
            <label htmlFor="">First Name</label>
            <input type="text" name="firstName" value={formData.firstName} onChange={handleChange}/>
            </div>
    
            <div>
            <label htmlFor="">Last Name</label>
            <input type="text" name="lastName" value={formData.lastName} onChange={handleChange} />
            </div>

            <div>
            <label htmlFor="">Email</label>
            <input type="text" name="email" value={formData.email} onChange={handleChange}/>
            </div>

            <button type="submit">Submit</button>


            <p>Nama Depan: {formData.firstName}</p>
            <p>nama Belakang: {formData.lastName}</p>
            <p>Email: {formData.email}</p>
        </form>
)
}