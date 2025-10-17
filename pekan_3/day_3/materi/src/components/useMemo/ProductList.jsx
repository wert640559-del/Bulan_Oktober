import { useMemo, useState } from "react";

export default function ProductList({ products, searchItem }){
    const [sortBy, setSortBy] = useState('name');

    const filteredAndSortedProducts = useMemo(() => {
    console.log('🔄 Melakukan filter dan sort produk...');
    
    // Simulasi perhitungan yang memakan waktu
    const startTime = performance.now();
    
    // Filter produk berdasarkan search term
    let filtered = products.filter(product => 
      product.name.toLowerCase().includes(searchItem.toLowerCase())
    );
    
    // Sort produk berdasarkan kriteria
    filtered.sort((a, b) => {
      if (sortBy === 'name') {
        return a.name.localeCompare(b.name);
      } else if (sortBy === 'price') {
        return a.price - b.price;
      } else if (sortBy === 'rating') {
        return b.rating - a.rating;
      }
      return 0;
    });
    
    // Simulasi delay untuk menunjukkan perhitungan mahal
    const endTime = performance.now();
    console.log(`⏱️ Waktu perhitungan: ${endTime - startTime}ms`);
    
    return filtered;
  }, [products, searchItem, sortBy]); // Hanya jalankan ulang jika salah satu berubah

  return (
    <div>
      <h3>Daftar Produk</h3>
      <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
        <option value="name">Urutkan berdasarkan Nama</option>
        <option value="price">Urutkan berdasarkan Harga</option>
        <option value="rating">Urutkan berdasarkan Rating</option>
      </select>
      
      <div>
        {filteredAndSortedProducts.map(product => (
          <div key={product.id} style={{ border: '1px solid #ccc', margin: '5px', padding: '10px' }}>
            <h4>{product.name}</h4>
            <p>Harga: Rp {product.price.toLocaleString()}</p>
            <p>Rating: {product.rating}/5</p>
          </div>
        ))}
      </div>
    </div>
  );
}

// Contoh data produk
export const sampleProducts = [
  { id: 1, name: 'Laptop Gaming', price: 15000000, rating: 4.5 },
  { id: 2, name: 'Smartphone', price: 5000000, rating: 4.2 },
  { id: 3, name: 'Headphone', price: 800000, rating: 4.8 },
  { id: 4, name: 'Mouse Wireless', price: 200000, rating: 4.0 },
  { id: 5, name: 'Keyboard Mechanical', price: 1200000, rating: 4.6 },
];


