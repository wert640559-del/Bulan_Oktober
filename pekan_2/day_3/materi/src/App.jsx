import { useEffect, useState } from "react"
import TimerSederhana from "./components/TimerSederhana";
import UserProfile from "./components/ArrayDependensi";

export default function App(){
  useEffect(() => {
    console.log('komponen di re-render atau diupdate!')
  });

  const [currentUserId, setCurrentUserId] = useState(1)
  const [currentPhotosId, setCurrentPhotosId] = useState(1)

  return (
    <div>
      <h1>Contoh useEffect</h1>
      <p>lihat console browser anda!</p>
      <p>nanti ada console.log bahwa halaman ini dire-render</p>

      <TimerSederhana/>
      
      <UserProfile userId={currentUserId} photosId={currentPhotosId}/>
      <button onClick={() => setCurrentUserId((prev) => prev + 1)}> Lihat Pengguna Berikutnya</button>
      <button onClick={() => setCurrentPhotosId(Pprev => Pprev + 1 )}>Lihat Gambar</button>

    </div>
  )
}