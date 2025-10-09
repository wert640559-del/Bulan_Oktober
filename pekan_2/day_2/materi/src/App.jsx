import Greeting from "./components/UserGreeting";

export default function App() {
  return (
    <div>
      <div>
      <h2>Conditional Rendering dengan if/else</h2>
      <Greeting isLoggedIn={true} />
      <Greeting isLoggedIn={false} />
    </div>

    <div>
      
    </div>
    </div>
  )
}