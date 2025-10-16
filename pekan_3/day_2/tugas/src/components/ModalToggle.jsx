import { useState } from "react";
import useToggle from "../hooks/useToggle";

export default function ModalToggle() {
    const [isOpen, toggleOpen] = useToggle(false)
    const [isi, setIsi] = useState('')

    return (
        <div>
            <button onClick={toggleOpen}>
                {isOpen ? "Tutup Modal" : "Buka Modal"}
            </button>

            {isOpen && (
                <div style={{
                    border: "1px solid #ccc",
                    padding: "10px",
                    marginTop: "10px"
                }}>
                    <input type="text" value={isi} onChange={(e) => setIsi(e.target.value)} />
                    <p>{isi}</p>
                </div>
            )}
        </div>
    )

}