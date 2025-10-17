import React from 'react';

function LazyLoadedComponent2() {
  return (
    <div style={{ padding: '20px', textAlign: 'center' }}>
      <h3>🚀 Komponen 2 - Dimuat Secara Lazy</h3>
      <p>Komponen ini dimuat menggunakan React.lazy()</p>
      <div style={{ 
        backgroundColor: '#FF9A00', 
        padding: '20px', 
        borderRadius: '8px',
        marginTop: '15px',
        color: 'white'
      }}>
        <p>Fitur Komponen 2</p>
        <ul style={{ textAlign: 'left', display: 'inline-block' }}>
          <li>React.memo</li>
          <li>useMemo hook</li>
          <li>useCallback hook</li>
        </ul>
      </div>
    </div>
  );
}

export default LazyLoadedComponent2;