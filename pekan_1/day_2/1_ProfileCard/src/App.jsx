import './App.css'
import ProfileCard from './components/ProfileCard.jsx'
import image from './assets/boy.png'
function App() {
  return (
    <div>
      <h1>Profil Santri:</h1>
      <ProfileCard 
      nama="Muhammad Harits"
      foto={image}
      bio="Programmer Pondok IT"
      skills={['HTML', 'CSS', 'javaScript', 'React']}
      />
    </div>
  )
}

export default App
