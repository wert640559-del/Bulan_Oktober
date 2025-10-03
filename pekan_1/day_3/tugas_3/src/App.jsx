import Card from './components/Card.jsx'
import './App.css'

function App() {

  return ( 
    <div>
      <Card>
        <h2>Muhammad Harits</h2>
        <img src="foto.png" alt=""/>
        <p>Programmer Pondok IT</p>
        <button>Detail</button>
      </Card>

      <Card>
        <h3>Kemampuan Saya</h3>
        <ul>
          <li>HTML</li>
          <li>CSS</li>
          <li>JavaScript</li>
          <li>React</li>
        </ul>
      </Card>
    </div>
  )
}

export default App
