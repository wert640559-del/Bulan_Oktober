export default function DistanceInput(props) {
  const { label, value, onValueChange } = props;

  const labelName = {
    km: "Kilometer",
    mile: "Mill",
  };

  return (
    <fieldset>
      <legend>Jarak dalam: {labelName[label]}</legend>
      <input
        type="text"
        value={value}
        onChange={(e) => onValueChange(e.target.value, label)}
      />
    </fieldset>
  );
}
