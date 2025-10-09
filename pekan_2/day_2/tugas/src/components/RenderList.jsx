import React from "react";

export default function ProductList() {
  const products = [
    { id: 1, name: "Laptop" },
    { id: 2, name: "Mouse" },
    { id: 3, name: "Keyboard" },
    { id: 4, name: "Monitor" },
  ];

  const containerStyle = {
    fontFamily: "sans-serif",
    maxWidth: "400px",
    margin: "50px auto",
    padding: "20px",
    borderRadius: "10px",
    backgroundColor: "#f9f9f9",
    boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
    color: "#333",
  };

  const listStyle = {
    listStyle: "none",
    padding: 0,
    marginTop: "15px",
  };

  const itemStyle = {
    backgroundColor: "#fff",
    padding: "10px 15px",
    borderRadius: "6px",
    marginBottom: "8px",
    boxShadow: "0 1px 3px rgba(0,0,0,0.05)",
  };

  return (
    <div style={containerStyle}>
      <h2>Daftar Produk</h2>
      {products.length > 0 ? (
        <ul style={listStyle}>
          {products.map((product) => (
            <li key={product.id} style={itemStyle}>
              {product.name}
            </li>
          ))}
        </ul>
      ) : (
        <p>Belum ada produk tersedia.</p>
      )}
    </div>
  );
}
