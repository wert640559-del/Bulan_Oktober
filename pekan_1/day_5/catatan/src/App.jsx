import { useState } from 'react'
import './App.css'
import Counter from './components/Counter.jsx'
import UserProfile from './components/userProfile.jsx'

function App(){
const [count, setCount] = useState(1)


  return (
    <div>
      <div>
        <p>count: {count}</p>
        <button onClick={() => setCount(count * 99)}>kali</button>
        <button onClick={() => setCount(count * 0 + 1)}>hapus</button>
      </div>

      <Counter/>
      <UserProfile/>
    </div>
  )
}

export default App
