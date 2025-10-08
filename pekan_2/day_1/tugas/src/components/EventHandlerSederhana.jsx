import { useState } from "react";

export default function EventHandlerSederhana(){
    const [isi, setIsi] = useState(false)

    const handleClick = (event) => {
        event.preventDefault();
        alert('Selamat, kamu mendapatkan virus spesial')
    }

    const handleMouseEnter = (event) => {
        console.log('mouse nya masuk ke atas tombol')
        setIsi(true)
    }

    const handleMouseLeave = (event) => {
        console.log('mousenya keluar dari tombol')
        setIsi(false)
    }

    const handleImage = () => {
        alert("jangan klik gambarnya juga!")
        
    }

    return (
        <div style={{ margin: 'auto', padding: '20vh 0', textAlign: 'center', height: '50vh' , alignItems: 'center'}}>
            <h2 >Event Handling Sederhana</h2>
            <button onClick={handleClick} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} value={isi} style={{padding: '10px 15px', borderRadius: '20px', border: 'none', backgroundColor: '#134686'}}>TOMBOL</button><br /><br />
             <div style={{backgroundColor: '#FEB21A', width: 'fit-content', padding: '15px 30px', borderRadius: '20px', margin: 'auto'}}>
                {isi ? (
                <div>
                    <img src="images.jpeg" alt="" style={{width: '200px'}} />
                    <h4>Jangan Pencet Tombol !</h4>
                </div>
             ) : (
                <div>
                    <img src="cursor.jpg" alt="" style={{width: '200px'}} onClick={handleImage}/>
                    <h4>Jangan arahkan cursor ke tombol</h4>
                </div>
             )}
             </div>
        </div>
    )
}