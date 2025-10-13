import { useState } from "react";
import DistanceInput from "./DistanceInput";
import { toKm, toMile, tryConvert } from "../../utils/DistanceConverter";

export default function KmMileConverter() {
  const [distance, setDistance] = useState("");
  const [scale, setScale] = useState("km");

  const handleChange = (value, label) => {
    setDistance(value);
    setScale(label);
  };

  const mile = scale === "km" ? tryConvert(distance, toMile) : distance;
  const km = scale === "mile" ? tryConvert(distance, toKm) : distance;

  return (
    <div>
        <h2>Distance Converter</h2>

      <DistanceInput label="km" value={km} onValueChange={handleChange} />
      <DistanceInput label="mile" value={mile} onValueChange={handleChange} />

      <p>{km} km = {mile} mill</p>
    </div>
  );
}
