import ProductCard from './components/ProductCard.jsx'
import './App.css'

function App() {
  return (
    <div>
      <h1>Anda Wajib Beli!</h1>
      <div className='container'>
        <ProductCard productName="Meja" image='meja.png'price={100000} stock={13} isAvailable={true}/>
        <ProductCard productName="Kursi" image='meja.png'price={60000} stock={8} isAvailable={true}/>
        <ProductCard productName="Lemari" image='meja.png'price={98000} stock={3} isAvailable={true}/>
        <ProductCard productName="Kasur" image='meja.png'price={50000} stock={90} isAvailable={true}/>
        <ProductCard productName="Rak" image='meja.png'price={120000} stock={15} isAvailable={true}/>
        <ProductCard productName="Sofa" image='meja.png'price={600000} stock={75} isAvailable={true}/>
        <ProductCard productName="Orang" image='meja.png'price={999000} stock={1} isAvailable={true}/>
      </div>
    </div>
  )
}

export default App
