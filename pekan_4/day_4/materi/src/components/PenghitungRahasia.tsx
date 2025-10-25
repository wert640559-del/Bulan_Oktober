import React, { useRef, useState } from 'react'
import { Button } from './ui/button'

const PenghitungRahasia = () => {
    const hitungan = useRef<number>(0)
    const [tampil, setTampil] = useState<number>(0)

    const tambah = () => {
        hitungan.current += 1;
        console.log(hitungan.current) 
        setTampil(hitungan.current)
    }
  return (
    <div>
        <h2>Penghitung Rahasia</h2>
        <p>nilai yang terlihat: {hitungan.current}</p>
        <Button onClick={tambah}>Tambah</Button>
        <p>cek console untuk melihat nilai yang sebenarnya</p>

    </div>
  )
}

export default PenghitungRahasia