import { useRef } from "react";
import { Input } from "./ui/input";
import { Button } from "./ui/button";

export default function FocusInput() {
    const kotakRef = useRef<HTMLInputElement | null>(null);

    const focusInput = () => {
        if (kotakRef.current) {
            kotakRef.current.value = "Assalamualaikum warahmatullahi wabarakatuh";
            kotakRef.current.focus();
        }
    }

    return (
        <div>
            <h2>useRef: Mengakses DOM</h2>
            <Input type="text" ref={kotakRef}/>
            <Button onClick={focusInput}>Fokus pada Input</Button>
        </div>
    )
}