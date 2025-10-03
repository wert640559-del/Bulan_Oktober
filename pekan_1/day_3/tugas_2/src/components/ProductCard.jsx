import '../App'


function ProductCard(props){
    return (
        <div className="card">
            <h2>{props.productName}</h2>
            <img src={props.image} alt="" />
            <p>Harga: {props.price}</p>
            <p>stok: {props.stock}</p>
            {props.isAvailable ? <p>Barang Masih Tersedia</p> : <p>Barang Sudah Habis</p>}
        </div>
    )
}
export default ProductCard;