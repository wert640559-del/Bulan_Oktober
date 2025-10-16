import { useEffect } from "react";
import useToggle from "../hooks/useToggle";

export default function SwitchButton() {
    const [isOn, toggleSwitch] = useToggle(true)

    useEffect(() => {
        document.body.style.background = isOn ? "#FDEAD5" : "black",
        document.body.style.color = isOn ? "black" : "white"
    }, [isOn])

    return (
        <div>
            <img src={isOn ? "hidup.png" : "mti.png"} alt="" style={{width: "300px"}}/>
            <p>Status: {isOn ? "ON" : "OFF"}</p>
            <button onClick={toggleSwitch}>
                {isOn ? "Matikan" : "Hidupkan"}
            </button>
        </div>
    )
}