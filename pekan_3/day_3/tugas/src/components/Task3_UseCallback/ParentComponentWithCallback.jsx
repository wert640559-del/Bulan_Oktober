import React, { useState, useCallback } from 'react';
import ChildComponentWithCallback from './ChildComponentWithCallback';

function ParentComponentWithCallback() {
  const [parentCount, setParentCount] = useState(0);
  const [childCount, setChildCount] = useState(0);
  const [useOptimization, setUseOptimization] = useState(true);

  console.log('🔄 ParentComponentWithCallback di-render');

  // Tanpa useCallback - fungsi dibuat ulang setiap render
  const unoptimizedCallback = () => {
    console.log('❌ Unoptimized callback executed');
    setChildCount(prev => prev + 1);
  };

  // Dengan useCallback - fungsi di-memoize
  const optimizedCallback = useCallback(() => {
    console.log('✅ Optimized callback executed');
    setChildCount(prev => prev + 1);
  }, []);

  const callback = useOptimization ? optimizedCallback : unoptimizedCallback;

  return (
    <div className="component-container">
      <h3>🧩 Evaluasi #3 - Optimasi dengan useCallback</h3>
      
      {/* Checkbox dengan classname external */}
      <div className="checkbox-container">
        <label className="checkbox-label">
          <input
            type="checkbox"
            className="checkbox-input"
            checked={useOptimization}
            onChange={(e) => setUseOptimization(e.target.checked)}
          />
          Gunakan useCallback Optimization
        </label>
      </div>

      <div className="stats">
        <div className="stat-item">
          <div className="stat-value">{parentCount}</div>
          <div className="stat-label">Parent Count</div>
        </div>
        <div className="stat-item">
          <div className="stat-value">{childCount}</div>
          <div className="stat-label">Child Count</div>
        </div>
      </div>

      <div className="navigation">
        <button 
          className="btn btn-primary"
          onClick={() => setParentCount(parentCount + 1)}
        >
          Update Parent State
        </button>
        
        <button 
          className="btn btn-secondary"
          onClick={callback}
        >
          Execute Callback
        </button>

        <button 
          className="btn btn-danger"
          onClick={() => {
            setParentCount(0);
            setChildCount(0);
          }}
        >
          Reset
        </button>
      </div>

      <div style={{ marginTop: '20px' }}>
        <ChildComponentWithCallback 
          onButtonClick={callback}
          optimized={useOptimization}
        />
      </div>
    </div>
  );
}

export default ParentComponentWithCallback;