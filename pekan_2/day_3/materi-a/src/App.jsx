import { useEffect, useState } from "react";
import Timer from "./components/Timer";
import UserProfile from "./components/UserProfile";
import WindowSizeTracker from "./components/WindowSizeTracker";
import MultiEffectComponent from "./components/Multiple";

export default function App() {
  useEffect(() => {
    console.log("Komponen di render pertama kali di useEffect")

    

  }, [])

  const [userId, setUserId] = useState(1)



  return (
    <div>
      <Timer/>
      <button onClick={() => setUserId(prev => prev + 1)}>klik</button>
      <UserProfile userId={userId}/>

      <WindowSizeTracker></WindowSizeTracker>

      <MultiEffectComponent></MultiEffectComponent>

    </div>
  )
}