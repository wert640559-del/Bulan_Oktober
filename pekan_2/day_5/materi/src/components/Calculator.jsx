import { useState } from "react";
import TemperatureInput from "./TemperatureInput";
import { toCelsius, toFahrenheit, tryConvert } from "../utils/convertFunction";

export default function Calculator() {
    const [temperature, setTemperature] = useState('')
    const [scale, setScale] = useState("c")

    const handleCelsiusChange = (temp) => {
        setTemperature(temp);
        setScale("c")
    }

    const handleFahrenheitChange = (temp) => {
        setTemperature(temp);
        setScale("f")
    }

    const celsius = scale === 'f' ? tryConvert(temperature, toCelsius) : temperature;
    const fahrenheit = scale === 'c' ? tryConvert(temperature, toFahrenheit) : temperature;

    return (
        <div>
            <h2>Kalkulator Suhu</h2>
            <TemperatureInput
             scale= 'c'
             onTemperatureChange={handleCelsiusChange}
             temperature= {celsius}
            />
            <TemperatureInput
                scale='f'
                onTemperatureChange={handleFahrenheitChange}
                temperature={fahrenheit}
            />

            <p>Suhu dalam Celcius</p>
            <p>Suhu dalam Fahrenheit</p>
        </div>
    )
}

