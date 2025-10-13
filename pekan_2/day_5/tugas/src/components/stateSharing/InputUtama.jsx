import { useState } from "react";
import InputA from "./Input";
import InputB from "./Output";

export default function InputUtama() {
    const [text, setText] = useState("")

    const handleTextChange = (value) => {
        setText(value)
    }
    return (
        <div>
            <h2>State Sharing Antar Komponen Saudara</h2>
            <InputA text={text} onTextChange={handleTextChange} />
            <InputB text={text} />
        </div>
    )
}