import { useContext, useState } from "react";
import ProductList, { sampleProducts } from "./ProductList";

export default function Product() {
    const [searchTerm, setSearchTerm] = useState('');
  const [otherState, setOtherState] = useState(0);


  return (
    <div style={{ padding: '20px' }}>
      <h2>Contoh useMemo - Optimasi Perhitungan Mahal</h2>
      
      <input
        type="text"
        placeholder="Cari produk..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        style={{ width: '300px', padding: '8px', marginBottom: '10px' }}
      />
      
      <button onClick={() => setOtherState(otherState + 1)}>
        Update State Lain (Count: {otherState})
      </button>
      
      <p style={{ color: 'gray', fontSize: '14px' }}>
        💡 Coba ubah state lain di atas dan lihat di console. 
        Perhitungan filter/sort hanya akan dijalankan ulang jika search term atau sort berubah!
      </p>
      
      <ProductList products={sampleProducts} searchItem={searchTerm} />
    </div>
  );
}
