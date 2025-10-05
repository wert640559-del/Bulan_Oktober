import React from 'react'
import './App.css'
import MyButton from './components/MyButton'
import DynamicButton from './components/dinamic.button';

function App() {
  const headerStyle = {
    backgroundColor: '#282c34',
    color: 'white',
    padding: '20px',
    textAlign: 'center',
    borderRadius: '5px',
  };

  const paragraphStyle = {
    fontSize: '16px',
    lineHeight: '1.5',
    color: '#333',
    margin: '10px 0',
  }

  return (
    <div style={{
      fontFamily: 'Arial, sans-serif', 
      maxWidth:'800px',
      margin: '20px auto'
    }}>
      <header style={headerStyle}>
        <h1>Selamat Datang di Aplikasi React</h1>
      </header>
      <p style={paragraphStyle}> 
        Ini adalah contoh penggunaan <strong>inline styles</strong> dalam React.
        Setiap properti CSS harus ditulis sebagai pasangan kunci nilai dalam object JavaScript.
      </p>
      <button style={{
        backgroundColor: '#61dafb',
        color: 'white',
        border: 'none', 
        padding: '10px 20px',
        borderRadius: '5px',
        cursor: 'pointer',
        fontSize: '1em'
      }}>
        Klik Saya
      </button>

      <div className= "container">
        <h1 className='title'>Styling dengan <span className='highlight'>CSS classes</span></h1>
        <p>
          Ini adalah cara paling umum untuk me-style komponen React.
          Kita mengimpor file CSS dan menggunakan atribut <code className='highlight'>classsName</code>
        </p>
        <button className='button'>Pelajari lebih lanjut</button>
      </div>

      <div>
        <h1>Styling dengan CSS modules</h1>
        <MyButton onClick={() => alert('Default Button Clicked')}>
          Default Button
        </MyButton>

        <MyButton type='primary' onClick={() => alert('Primary Button Clicked!')}>
          Primary Button
        </MyButton>

        <p>
          Nama kelas CSS di-hash secara otomatis untuk mencegah konflik nama. 
          Lihat inspeksi elemen di browser untuk melihat nama kelas yang dihasilkan.
        </p>
      </div>


      <div>
        <DynamicButton variant="primary" size="small">Primary</DynamicButton>
        <DynamicButton variant="secondary" size="medium">Secondary</DynamicButton>
        <DynamicButton variant="danger" size="large">Danger</DynamicButton>
      </div>
    </div>

    

  )
}

export default App
