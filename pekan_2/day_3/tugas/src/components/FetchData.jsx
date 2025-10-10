import { useEffect, useState } from "react";

export default function ProductFetch() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchData = () => {
    setLoading(true); 
    console.log("Mengambil data...");

    setTimeout(() => {
      const daftarProducts = [
        { id: 1, name: "Headset", price: 80000 },
        { id: 2, name: "Mouse", price: 120000 },
        { id: 3, name: "Charger", price: 90000 },
        { id: 4, name: "Keyboard", price: 250000 },
        { id: 5, name: "Monitor", price: 1750000 },
      ];
      setProducts(daftarProducts);
      setLoading(false);
      console.log("Data produk berhasil dimuat!");
    }, 2000);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleClick = () => {
    fetchData();
  };

  return (
    <div>
      <h2>Daftar Produk:</h2>

      {loading ? (
        <p>Sedang memuat data...</p>
      ) : (
        <ul>
          {products.map((item) => (
            <li key={item.id}>
              <strong>{item.name}</strong> — Rp{item.price.toLocaleString("id-ID")}
            </li>
          ))}
        </ul>
      )}

      {/* tombol selalu muncul */}
      <button onClick={handleClick} disabled={loading}>
        {loading ? "Memuat..." : "Muat Ulang Produk"}
      </button>
    </div>
  );
}
