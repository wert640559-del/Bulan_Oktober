import KirimPesanan from './components/pesan.jsx'
import Sapa from './components/pesanLogin.jsx'
import './App.css'

function App() {

  const pesanan = ['bakso', 'ikan bakar', 'ayam goreng', 'mie ayam']
  const kalauLogin = true;
  return (
    <div>
      
    <Sapa jikaLogin={true}/>

    <KirimPesanan pesananMenunggu={pesanan}/>

    {kalauLogin ? (
      <h1>Asslamualaikum, selamat datang</h1>
    ): (
      <h1>Silahkan Login!</h1>
    )}
    </div>
  )
}
export default App
