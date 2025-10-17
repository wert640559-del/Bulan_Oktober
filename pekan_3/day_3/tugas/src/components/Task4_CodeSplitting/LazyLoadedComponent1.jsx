import React from 'react';

function LazyLoadedComponent1() {
  return (
    <div style={{ padding: '20px', textAlign: 'center' }}>
      <h3>🌟 Komponen 1 - Dimuat Secara Lazy</h3>
      <p>Komponen ini dimuat menggunakan React.lazy()</p>
      <div style={{ 
        backgroundColor: '#FFD93D', 
        padding: '20px', 
        borderRadius: '8px',
        marginTop: '15px'
      }}>
        <p>Fitur Komponen 1</p>
        <ul style={{ textAlign: 'left', display: 'inline-block' }}>
          <li>Optimasi performa</li>
          <li>Code splitting</li>
          <li>Lazy loading</li>
        </ul>
      </div>
    </div>
  );
}

export default LazyLoadedComponent1;