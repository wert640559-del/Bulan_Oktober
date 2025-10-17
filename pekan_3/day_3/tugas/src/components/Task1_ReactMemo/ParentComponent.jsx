import React, { useState } from 'react';
import ChildWithoutMemo from './ChildWithoutMemo';
import ChildWithMemo from './ChildWithMemo';

export default function ParentComponent() {
  const [parentCount, setParentCount] = useState(0);
  const [otherState, setOtherState] = useState(0);

  console.log('👨 ParentComponent di-render');

  return (
    <div className="component-container">
      <h3>🧩 Evaluasi #1 - Implementasi React.memo</h3>
      
      <div className="stats">
        <div className="stat-item">
          <div className="stat-value">{parentCount}</div>
          <div className="stat-label">Parent Count</div>
        </div>
        <div className="stat-item">
          <div className="stat-value">{otherState}</div>
          <div className="stat-label">Other State</div>
        </div>
      </div>

      <div className="navigation">
        <button 
          className="btn btn-primary"
          onClick={() => setParentCount(parentCount + 1)}
        >
          Tambah Parent Count
        </button>
        
        <button 
          className="btn btn-secondary"
          onClick={() => setOtherState(otherState + 1)}
        >
          Tambah Other State
        </button>
      </div>

      <div style={{ marginTop: '20px', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
        <div>
          <h4>Child tanpa React.memo:</h4>
          <ChildWithoutMemo count={parentCount} />
        </div>
        <div>
          <h4>Child dengan React.memo:</h4>
          <ChildWithMemo count={parentCount} />
        </div>
      </div>
    </div>
  );
}