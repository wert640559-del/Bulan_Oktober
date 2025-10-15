import { useState, useEffect } from "react";
import CartContext from "../../context/CartContext";

export default function CartProvider({ children }) {
  const [cart, setCart] = useState([]); 
  const [total, setTotal] = useState(0);

  // Hitung ulang total setiap kali cart berubah
  useEffect(() => {
    const newTotal = cart.reduce((sum, item) => sum + item.price, 0);
    setTotal(newTotal);
  }, [cart]);

  // tambah item
  const addItem = (product) => {
    setCart((prev) => [...prev, product]);
  };

  // hapus hanya 1 item (bukan semua dengan id sama)
  const removeItem = (id) => {
    setCart((prev) => {
      const index = prev.findIndex((p) => p.id === id);
      if (index === -1) return prev;

      const newCart = [...prev];
      newCart.splice(index, 1);
      return newCart;
    });
  };

  // kosongkan semua cart
  const clearCart = () => {
    setCart([]);
  };

  const contextValue = { cart, total, addItem, removeItem, clearCart };

  return (
    <CartContext.Provider value={contextValue}>
      {children}
    </CartContext.Provider>
  );
}
