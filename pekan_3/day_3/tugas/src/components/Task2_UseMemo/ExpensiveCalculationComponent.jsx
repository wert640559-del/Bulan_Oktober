import React, { useState, useMemo } from 'react';

function ExpensiveCalculationComponent() {
  const [number, setNumber] = useState(1);
  const [otherState, setOtherState] = useState(0);
  const [useOptimization, setUseOptimization] = useState(true);

  // Fungsi simulasi perhitungan berat
  const expensiveCalculation = (num) => {
    console.log('🧮 Melakukan perhitungan mahal...');
    let result = 0;
    for (let i = 0; i < 10000000; i++) { // Dikurangi untuk menghindari freeze
      result += Math.sqrt(num * i);
    }
    return result.toFixed(2);
  };

  // Optimasi pakai useMemo
  const calculatedValue = useOptimization
    ? useMemo(() => expensiveCalculation(number), [number])
    : expensiveCalculation(number);

  return (
    <div className="component-container">
      <h3>🧩 Evaluasi #2 - Optimasi dengan useMemo</h3>
      
      <div style={{ marginBottom: '20px' }}>
        <label>
          <input
            type="checkbox"
            checked={useOptimization}
            onChange={(e) => setUseOptimization(e.target.checked)}
            style={{ marginRight: '10px' }}
          />
          Gunakan useMemo Optimization
        </label>
      </div>

      <div className="stats">
        <div className="stat-item">
          <div className="stat-value">{number}</div>
          <div className="stat-label">Input Number</div>
        </div>
        <div className="stat-item">
          <div className="stat-value">{otherState}</div>
          <div className="stat-label">Other State</div>
        </div>
        <div className="stat-item">
          <div className="stat-value">{calculatedValue}</div>
          <div className="stat-label">Hasil</div>
        </div>
      </div>

      <div className="navigation">
        <button 
          className="btn btn-primary"
          onClick={() => setNumber(number + 1)}
        >
          Tambah Angka
        </button>
        
        <button 
          className="btn btn-secondary"
          onClick={() => setOtherState(otherState + 1)}
        >
          Ubah State Lain (Count: {otherState})
        </button>
        
        <button 
          className="btn btn-danger"
          onClick={() => setUseOptimization(!useOptimization)}
        >
          {useOptimization ? 'Matikan Optimasi' : 'Aktifkan Optimasi'}
        </button>
      </div>

    </div>
  );
}

export default ExpensiveCalculationComponent;