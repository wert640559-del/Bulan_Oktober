import React, { memo } from 'react';

// Komponen anak yang di-memoize
const ChildComponentWithCallback = memo(({ onButtonClick, optimized }) => {
  console.log(optimized ? 
    '✅ OptimizedChild di-render' : 
    '❌ UnoptimizedChild di-render'
  );

  return (
    <div className="component-container" style={{ 
      backgroundColor: optimized ? '#FFD93D' : '#FF9A00',
      marginTop: '10px'
    }}>
      <h4>Child Component {optimized ? '(Optimized)' : '(Not Optimized)'}</h4>
      <p>
        {optimized ? 
          '✅ Menggunakan React.memo + useCallback - Tidak di-render ulang saat parent update' :
          '❌ Tanpa useCallback - Selalu di-render ulang saat parent update'}
      </p>
      <button 
        className="btn btn-primary"
        onClick={onButtonClick}
      >
        Tambah Child Count (Callback)
      </button>
    </div>
  );
});

export default ChildComponentWithCallback;