import HargaDiskon from "./components/diskon.jsx"
import SapaUser from "./components/sapa.jsx"
import './App.css'
function App() {

  return (
   <div>
    <SapaUser nama= "Muhammad harits"/>

    <HargaDiskon harga={100000} diskon={10}/>

   </div>
  )
}

export default App;
