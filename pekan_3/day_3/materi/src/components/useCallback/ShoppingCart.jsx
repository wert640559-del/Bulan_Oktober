import { useCallback, useState } from "react";
import { ExpensiveChild } from "./ExpensiveChild";

export default function ShoppingCart() {
    const [cart, setCart] = useState([]);
  const [otherState, setOtherState] = useState(0);

  // ❌ TANPA useCallback: Fungsi dibuat ulang setiap render
  // const handleAddToCart = (product) => {
  //   setCart(prevCart => [...prevCart, product]);
  // };

  // ✅ DENGAN useCallback: Fungsi di-memoize, hanya dibuat ulang jika dependensi berubah
  const handleAddToCart = useCallback((product) => {
    console.log(`🛒 Menambahkan ${product.name} ke keranjang`);
    setCart(prevCart => [...prevCart, product]);
  }, []); // Array kosong = fungsi tidak akan pernah dibuat ulang




  const clearCart = useCallback(() => {
    setCart([]);
  }, []);

  return (
    <div style={{ padding: '20px' }}>
      <h2>Contoh useCallback - Optimasi Callback Functions</h2>
      
      <button onClick={() => setOtherState(otherState + 1)}>
        Update State Lain (Count: {otherState})
      </button>
      
      <button onClick={clearCart} style={{ marginLeft: '10px' }}>
        Kosongkan Keranjang
      </button>
      
      <p style={{ color: 'gray', fontSize: '14px' }}>
        💡 Coba klik tombol "Update State Lain" dan lihat di console. 
        ExpensiveChild tidak akan di-render ulang karena callback-nya di-memoize!
      </p>

      <div style={{ display: 'flex', gap: '20px' }}>
        <div style={{ flex: 1 }}>
          <h3>Produk Tersedia</h3>
          {sampleProducts.map(product => (
            <ExpensiveChild 
              key={product.id} 
              product={product} 
              onAddToCart={handleAddToCart}
            />
          ))}
        </div>
        
        <div style={{ flex: 1 }}>
          <h3>Keranjang Belanja ({cart.length} item)</h3>
          {cart.map((item, index) => (
            <div key={index} style={{ padding: '5px', border: '1px solid ' }}>
              {item.name} - Rp {item.price.toLocaleString()}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

const generateProducts = (count = 10000) => {
  const products = [];
  
  // Data yang lebih variatif
  const productCategories = [
    'Laptop Gaming', 'Smartphone', 'Headphone', 'Tablet', 'Smartwatch',
    'Keyboard', 'Mouse', 'Monitor', 'Printer', 'Camera', 'Speaker',
    'Router', 'External Hard Drive', 'Webcam', 'Microphone', 'Drone',
    'Graphics Card', 'RAM', 'SSD', 'Motherboard', 'Power Supply',
    'Gaming Chair', 'VR Headset', 'Smart TV', 'Projector', 'Earbuds',
    'Fitness Tracker', 'Action Camera', 'Portable Charger', 'USB Hub'
  ];

  const brands = [
    'Asus', 'Dell', 'HP', 'Lenovo', 'Acer', 'Samsung', 'Xiaomi', 'Apple',
    'Sony', 'Logitech', 'Razer', 'Canon', 'Nikon', 'JBL', 'Bose', 'LG',
    'MSI', 'Gigabyte', 'Corsair', 'HyperX', 'SteelSeries', 'GoPro',
    'DJI', 'Huawei', 'Google', 'Microsoft', 'Amazon', 'Philips', 'Toshiba'
  ];

  const productModels = [
    'Pro', 'Elite', 'Max', 'Ultra', 'Plus', 'Premium', 'Standard', 'Basic',
    'Advanced', 'Extreme', 'Gaming', 'Office', 'Home', 'Travel', 'Wireless',
    'Bluetooth', '4K', 'HD', 'RGB', 'Mechanical'
  ];

  // Fungsi untuk mendapatkan harga berdasarkan kategori
  const getPriceByCategory = (category) => {
    const priceRanges = {
      'Laptop Gaming': [8000000, 35000000],
      'Smartphone': [2000000, 25000000],
      'Tablet': [1500000, 15000000],
      'Camera': [3000000, 30000000],
      'Drone': [5000000, 40000000],
      'Graphics Card': [5000000, 50000000],
      'Smart TV': [3000000, 20000000],
      'Monitor': [1000000, 15000000],
      'Printer': [500000, 8000000],
      'Default': [100000, 5000000]
    };

    const range = priceRanges[category] || priceRanges['Default'];
    return Math.floor(Math.random() * (range[1] - range[0] + 1)) + range[0];
  };

  // Pre-generate data untuk performa lebih baik
  const usedNames = new Set();

  for (let i = 1; i <= count; i++) {
    const category = productCategories[Math.floor(Math.random() * productCategories.length)];
    const brand = brands[Math.floor(Math.random() * brands.length)];
    const model = productModels[Math.floor(Math.random() * productModels.length)];
    
    // Generate nama unik
    let productName;
    let attempts = 0;
    do {
      productName = `${brand} ${category} ${model} ${i}`;
      attempts++;
      if (attempts > 5) {
        // Fallback jika terlalu banyak percobaan
        productName = `${brand} ${category} ${model} ${i}-${Math.random().toString(36).substr(2, 3)}`;
        break;
      }
    } while (usedNames.has(productName));
    
    usedNames.add(productName);

    const price = getPriceByCategory(category);
    
    // Rating dengan distribusi yang lebih realistis (lebih sedikit rating rendah)
    const baseRating = Math.random();
    let rating;
    if (baseRating < 0.7) { // 70% produk memiliki rating 4.0-5.0
      rating = parseFloat((Math.random() * (5.0 - 4.0) + 4.0).toFixed(1));
    } else if (baseRating < 0.9) { // 20% produk memiliki rating 3.5-4.0
      rating = parseFloat((Math.random() * (4.0 - 3.5) + 3.5).toFixed(1));
    } else { // 10% produk memiliki rating 3.0-3.5
      rating = parseFloat((Math.random() * (3.5 - 3.0) + 3.0).toFixed(1));
    }

    products.push({
      id: i,
      name: productName,
      price: price,
      rating: rating
    });

    // Progress indicator untuk jumlah besar
    if (i % 1000 === 0) {
      console.log(`Generated ${i} products...`);
    }
  }

  return products;
};

// Generate 10,000 produk
const sampleProducts = generateProducts(10000);

// Verifikasi hasil
console.log('\n=== GENERATION COMPLETE ===');
console.log(`Total products: ${sampleProducts.length}`);
console.log('Sample products:');
console.log(sampleProducts.slice(0, 5));
console.log('...');
console.log(sampleProducts.slice(9995, 10000));

// Statistik tambahan
const priceStats = {
  min: Math.min(...sampleProducts.map(p => p.price)),
  max: Math.max(...sampleProducts.map(p => p.price)),
  avg: sampleProducts.reduce((sum, p) => sum + p.price, 0) / sampleProducts.length
};

const ratingStats = {
  min: Math.min(...sampleProducts.map(p => p.rating)),
  max: Math.max(...sampleProducts.map(p => p.rating)),
  avg: sampleProducts.reduce((sum, p) => sum + p.rating, 0) / sampleProducts.length
};

console.log('\n=== PRICE STATISTICS ===');
console.log(`Min: Rp ${priceStats.min.toLocaleString('id-ID')}`);
console.log(`Max: Rp ${priceStats.max.toLocaleString('id-ID')}`);
console.log(`Avg: Rp ${Math.round(priceStats.avg).toLocaleString('id-ID')}`);

console.log('\n=== RATING STATISTICS ===');
console.log(`Min: ${ratingStats.min}`);
console.log(`Max: ${ratingStats.max}`);
console.log(`Avg: ${ratingStats.avg.toFixed(2)}`);