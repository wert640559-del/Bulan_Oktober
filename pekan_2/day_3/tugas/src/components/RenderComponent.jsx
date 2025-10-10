import { useRef } from "react";
import { useState } from "react";
import { useEffect } from "react";

export default function RenderComponent() {
    const [name, setName] = useState('')
    const count = useRef(0)
    useEffect(() => {
        count.current += 1;
        console.log(`Nama dirender ${count.current} kali`)

    }, [name] )
    
    const handleChange = (event) => {
        setName(event.target.value)
    }
    return(
        <div>
            <input type="text" value={name} onChange={handleChange} placeholder="Masukkan nama kamu dengan jujur!"/>
            <p>nama: {name}</p>
            <p>Nama dirender sebanyak: {count.current} kali</p>
        </div>
    )
}