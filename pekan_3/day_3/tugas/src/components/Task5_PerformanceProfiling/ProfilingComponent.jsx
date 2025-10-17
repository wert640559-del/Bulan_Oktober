import React, { useState, useMemo } from 'react';

function ProfilingComponent() {
  const [items, setItems] = useState([]);
  const [filter, setFilter] = useState('');
  const [renderCount, setRenderCount] = useState(0);

  // Simulasi data besar
  const generateItems = () => {
    const newItems = [];
    for (let i = 0; i < 1000; i++) {
      newItems.push({
        id: i,
        name: `Item ${i}`,
        value: Math.random() * 1000,
        category: ['A', 'B', 'C', 'D'][Math.floor(Math.random() * 4)]
      });
    }
    setItems(newItems);
  };

  // Filter items tanpa optimasi
  const filteredItemsUnoptimized = items.filter(item =>
    item.name.toLowerCase().includes(filter.toLowerCase())
  );

  // Filter items dengan useMemo
  const filteredItemsOptimized = useMemo(() => {
    return items.filter(item =>
      item.name.toLowerCase().includes(filter.toLowerCase())
    );
  }, [items, filter]);

  // Simulasi render
  React.useEffect(() => {
    setRenderCount(prev => prev + 1);
  });

  return (
    <div className="component-container">
      <h3>🧩 Evaluasi #5 - Performance Profiling Demo</h3>
      <p>Gunakan React DevTools Profiler untuk menganalisis performa komponen ini</p>
      
      <div className="stats">
        <div className="stat-item">
          <div className="stat-value">{items.length}</div>
          <div className="stat-label">Total Items</div>
        </div>
        <div className="stat-item">
          <div className="stat-value">{filteredItemsOptimized.length}</div>
          <div className="stat-label">Filtered Items</div>
        </div>
        <div className="stat-item">
          <div className="stat-value">{renderCount}</div>
          <div className="stat-label">Render Count</div>
        </div>
      </div>

      <div className="navigation">
        <button 
          className="btn btn-primary"
          onClick={generateItems}
        >
          Generate 1000 Items
        </button>
        
        <input
          type="text"
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
          className="input-field"
          placeholder="Filter items..."
        />
        
        <button 
          className="btn btn-secondary"
          onClick={() => setItems([])}
        >
          Clear Items
        </button>
      </div>

      <div style={{ marginTop: '20px', maxHeight: '300px', overflow: 'auto', border: '1px solid #FFD93D', borderRadius: '4px' }}>
        <div style={{ padding: '10px', backgroundColor: '#FFD93D', position: 'sticky', top: 0 }}>
          <strong>Filtered Items ({filteredItemsOptimized.length} items)</strong>
        </div>
        {filteredItemsOptimized.slice(0, 50).map(item => (
          <div key={item.id} style={{ 
            padding: '8px 12px', 
            borderBottom: '1px solid #eee',
            display: 'flex',
            justifyContent: 'space-between'
          }}>
            <span>{item.name}</span>
            <span style={{ color: '#666' }}>Value: {item.value.toFixed(2)}</span>
          </div>
        ))}
        {filteredItemsOptimized.length > 50 && (
          <div style={{ padding: '10px', textAlign: 'center', color: '#666' }}>
            ... dan {filteredItemsOptimized.length - 50} item lainnya
          </div>
        )}
      </div>


    </div>
  );
}

export default ProfilingComponent;