import React from "react";

export const ExpensiveChild = React.memo(({ onAddToCart, product }) => {
    console.log(`ExpensiveChild untuk ${product.name} di-render`)

    return (
        <div>
            <h4>{product.name}</h4>
            <p>Harga: Rp {product.price.toLocaleString()}</p>
            <button onClick={() => onAddToCart(product)}>
                Tambah ke Keranjang
            </button>
        </div>
    )
})
