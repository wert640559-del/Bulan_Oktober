import { useState } from "react";
import RenderComponent from "./components/RenderComponent";
import UserProfile from "./components/UserProfile";
import WindowSizeTracker from "./components/WindowSizeTracker";
import Multiple from "./components/Multiple";
import ProductFetch from "./components/FetchData";

export default function App(){
  const [currentUserId, setCurrentUserId] = useState(0)
  return (
    <div>
      <RenderComponent/>

      <UserProfile userId={currentUserId}/>
      <button onClick={() => setCurrentUserId(prev => prev + 1)}>Lihat data pengguna</button>

      <WindowSizeTracker></WindowSizeTracker>

      <Multiple></Multiple>

      <ProductFetch/>
    </div>
  )
}