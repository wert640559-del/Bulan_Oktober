import { useContext } from "react";
import CartContext from "../../context/CartContext";

export default function CartDisplay() {
  const { cart, total, removeItem, clearCart } = useContext(CartContext);

  return (
    <div className="cart-container">
      <h3 className="cart-title">Keranjang Belanja</h3>
      {cart.length === 0 ? (
        <p className="empty-cart-message">Belum ada item di cart</p>
      ) : (
        <div className="cart-items">
          {cart.map((item) => (
            <div key={item.id} className="cart-item">
              <span className="item-info">{item.name}</span>
              <span className="item-price">Rp{item.price}</span>
              <button 
                className="remove-item-button"
                onClick={() => removeItem(item.id)}
              >
                Hapus
              </button>
            </div>
          ))}
        </div>
      )}
      <p className="cart-total">Total: Rp{total}</p>
      <button className="clear-cart-button" onClick={clearCart}>
        Kosongkan Cart
      </button>
    </div>
  );
}