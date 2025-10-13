export default function TemperatureInput(props){
    const {temperature, scale, onTemperatureChange } = props;

    return(
        <fieldset>
            <legend>Kalkulator Suhu Sederhana</legend>
            <input type="text" value={temperature} 
                onChange={(e) => onTemperatureChange(e.target.value, scale)}
            />
        </fieldset>
    )
}