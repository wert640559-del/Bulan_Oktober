import { useState } from "react";

function Counter(){
    const [count, setCount] = useState(0);

  const increment = () => {
    setCount((prev) => prev + 1)
  }

  const decrement = () => {
    setCount((prev) => prev - 1)
  }

  return (
    <>
    <div style={{display: 'flex', flexDirection: 'column', gap: '10px', justifyContent: 'center', alignItems: 'center'}}>
      <h1>Aplikasi Counter Sederhana</h1>
      <p>jumlah: {count}</p>

      <div style={{display: 'flex', gap: '10px'}}>
        <button onClick={decrement}>Kurang</button>

        <button onClick={() => setCount(count - 1)}>-</button>
        <input type="number" value={count} onChange={(event) => setCount(event.target.value)}/>
        <button onClick={() => setCount(count + 1)}>+</button>

        <button onClick={increment}>tambah</button>
      </div>
    </div>
    </>
  )
}

export default Counter;