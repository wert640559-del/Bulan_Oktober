export default function TemperatureInput(props) {
    const { temperature, onTemperatureChange, scale } = props;
    
    const scaleNames = {
        c: 'Celsius',
        f: 'Fahrenheit'
    }

    return (
        <fieldset>
            <legend>Masukkkan suhu dalam {scaleNames[scale]}</legend>
            <input type="text" value={temperature} onChange={(e) => onTemperatureChange(e.target.value)} />
        </fieldset>
    )
}