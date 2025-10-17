import React from 'react';

function LazyLoadedComponent3() {
  return (
    <div style={{ padding: '20px', textAlign: 'center' }}>
      <h3>🎯 Komponen 3 - Dimuat Secara Lazy</h3>
      <p>Komponen ini dimuat menggunakan React.lazy()</p>
      <div style={{ 
        backgroundColor: '#4F200D', 
        padding: '20px', 
        borderRadius: '8px',
        marginTop: '15px',
        color: 'white'
      }}>
        <p>Fitur Komponen 3</p>
        <ul style={{ textAlign: 'left', display: 'inline-block' }}>
          <li>Performance profiling</li>
          <li>React DevTools</li>
          <li>Optimization techniques</li>
        </ul>
      </div>
    </div>
  );
}

export default LazyLoadedComponent3;