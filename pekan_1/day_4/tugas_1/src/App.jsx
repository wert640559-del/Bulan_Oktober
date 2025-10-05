import ProfileBox from './components/ProfileBox'
import PelajaranToday from './components/Pelajaran'
import MyButton from './components/MyButton'
import AlertBox from './components/AlertBox'
import UkuranLayar from './components/ukuranLayar'
import './App.css'

function App() {
  return (
    <div>
      <ProfileBox/>
      <PelajaranToday/>
      <MyButton type='primary'>Klik Saya</MyButton>
      <MyButton type="default">Klik Saya</MyButton>
      <AlertBox status="success" pesan="Berhasil" title="Selamat" content="Tugas anda mendapatkan nilai 100"/>
      <AlertBox status="error" pesan="Gagal" title="Maaf" content="Nilai anda terlalu tinggi untuk diinput"/>
      <AlertBox status="warning" pesan="Peringatan!" title="Perhatian" content="Nilai anda terlalu tinggi"/>
      <UkuranLayar/>
      

    </div>
  )
}

export default App
