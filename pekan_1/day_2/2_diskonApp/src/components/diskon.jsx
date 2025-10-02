function HargaDiskon({harga, diskon}){
    const hargaAfterDiskon = harga - (harga *  diskon / 100);
    const pStyle = {
        color: 'red'
        
    }
    
    return (
        <div>
            <p>harga asli: {harga}</p>
            <p>diskon: {diskon}</p>
            <p>harga setelah diskon: {hargaAfterDiskon}</p>
        </div>
    )
}
export default HargaDiskon;