import { useContext } from "react";
import CartContext from "../../context/CartContext";

export default function ProductList() {
  const { addItem } = useContext(CartContext);

  const products = [
    { id: 1, name: "Laptop", price: 12000 },
    { id: 2, name: "Mouse", price: 500 },
    { id: 3, name: "Keyboard", price: 800 },
  ];

  return (
    <div className="product-list-container">
      <h3 className="product-list-title">Daftar Produk</h3>
      <div className="products-grid">
        {products.map((p) => (
          <div key={p.id} className="product-item">
            <div className="product-info">
              <div className="product-name">{p.name}</div>
              <div className="product-price">Rp{p.price}</div>
            </div>
            <button 
              className="add-to-cart-button"
              onClick={() => addItem(p)}
            >
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}