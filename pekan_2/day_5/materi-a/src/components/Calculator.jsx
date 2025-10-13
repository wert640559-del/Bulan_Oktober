import TemperatureInput from "./TemperatureInput";

export default function Calculator() {
    return (
        <div>
            <h2>Kalkulator suhu Sederhana</h2>
            <TemperatureInput 
                temperature={celsius}
                scale="c"
                onTemperatureChange={handleCelsiusChange }
            />
            <TemperatureInput
                temperature={fahrenheit}
                scale="f"
                onTemperatureChange={handleFahrenheitChange}
            />
        </div>
    )
}