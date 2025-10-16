import useCounterWithToggle from "../hooks/useCounterWithToggle";

export default function CounterToggleView() {
  const { count, increment, decrement, reset, isOn, toggle } = useCounterWithToggle();

  return (
    <div style={{ textAlign: "center", marginTop: "40px" }}>
      <h2>Counter: {count}</h2>
      <button onClick={increment}>Tambah</button>
      <button onClick={decrement}>Kurang</button>
      <button onClick={reset}>Reset</button>

      <h3>Status: {isOn ? "Aktif" : "Nonaktif"}</h3>
      <button onClick={toggle}>Ganti Status</button>
    </div>
  );
}
