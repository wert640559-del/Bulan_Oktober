    export const toMile = (km) => {
        return (km * 0.621371 )   
    }

    export const toKm = (mile) => {
        return (mile / 0.621371 )
    }

    export const tryConvert = (value, convert) => {
        const input = parseFloat(value);
        if (Number.isNaN(input)) return "";
        const output = convert(input);
        const rounded = Math.round(output * 1000) / 1000;
        return rounded.toString();
    }
