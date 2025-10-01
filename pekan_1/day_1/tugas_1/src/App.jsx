import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  // const [city, setCity] = useState("")
  // const city = 'Pekanbaru'
  // const country = 'Indonesia'
  const [kota, setKota] = useState("Jakarta")

  return (
    <div>
      <h1>Aplikasi Cuaca</h1>
      <p>Kota: {kota}</p>
      {/* <p>Negara: {country}</p> */}
      {/* berikan komentar anda */}
      <button onClick={() => setKota("bandung")}>Bandung</button>
      <button onClick={() => setKota("Pekanbaru")}>Pekanbaru</button>
    </div>
  )
}

export default App

const tombol = <button className="tombol"></button>

const nama = "Muhammad Harits"
const salam = <p>assalamualaikum {nama}</p>

const isiNama = <input type="text" placeholder='sia namo ang..' />