import { useState } from "react";

export default function NameForm() {
    const [name, setName] = useState('')

    const handleSubmit = (event) => {
        event.preventDefault();
        alert('nama yang di submit: ' + name)
        setName('')
    }

    const handleChange = (event) => {
        setName(event.target.value)
    }
    
    return (
        <form action="">
            <h2>Controlled Component</h2>
            <label htmlFor="">Nama: 
                <input type="text" value={name}  onChange={handleChange}/>
            </label>
        </form>
    )
}