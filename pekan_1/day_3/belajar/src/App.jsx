import { useState } from 'react'
import './App.css'
import Greeting from './components/Greeting.jsx'
import Welcome from './components/Welcome.jsx'
import ProductCard from './components/ProductCard.jsx'


function App() {

  return (
    <div>
    <Greeting/>
    <Welcome nama = "Muhammad Harits"/>
    <ProductCard NamaBarang= "Kipas" harga={10000} stock={20} tersedia={true}/>
    </div>
  )
}
export default App;
