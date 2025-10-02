
import './App.css'

function App() {
  const daerah = ['Jakarta', 'Bandung', 'Surabaya', 'Pekanbaru', 'Palembang', 'Bogor', "Papua", "Yogyakarta"]
  const organ = [
    {id: 1, nama: "Jantung", harga: 100000},
    {id: 2, nama: "Hati", harga: 999000},
    {id: 3, nama: "Ginjal", harga: 864000},
    {id: 4, nama: "lambung", harga: 648000},
    {id: 5, nama: "Paru-paru", harga: 100000},
    {id: 6, nama: "Mata", harga: 100000},
    {id: 7, nama: "Usus", harga: 100000},
  ]

  const listItems = daerah.map((daerah) => 
    <li key={daerah.toString()}>
      {daerah}
    </li>
  )
  return (
    <div>
      <h1>Daftar daerah</h1>
      <ul>{listItems}</ul>

      <h1>Daftar Organ:</h1>
      {organ.map((organ) => (
        <li key={organ.id}>
          {organ.nama} - ${organ.harga}
        </li>
      )
      )}
    </div>
  )
}

export default App


