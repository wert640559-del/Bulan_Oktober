function ProductCard(props){
    const style = {
        display: "flex",
        gap: "50px",
        

    }
    return (
        <div style={style}>
            <h3>{props.NamaBarang}</h3>
            <p>harga: {props.harga}</p>
            <p>Stok: {props.stock}</p>
            {props.tersedia && <p style= {{color: 'green'}}> Tersedia </p>}
        </div>
    )
}
export default ProductCard;