import React, { useState, Suspense } from 'react';

// Lazy load komponen
const LazyLoadedComponent1 = React.lazy(() => import('./LazyLoadedComponent1'));
const LazyLoadedComponent2 = React.lazy(() => import('./LazyLoadedComponent2'));
const LazyLoadedComponent3 = React.lazy(() => import('./LazyLoadedComponent3'));

function CodeSplittingDemo() {
  const [activeComponent, setActiveComponent] = useState(null);
  const [loadingState, setLoadingState] = useState('');

  const handleLoadComponent = (componentNumber) => {
    setLoadingState(`🔄 Memuat Komponen ${componentNumber}...`);
    setActiveComponent(componentNumber);
    
    // Clear loading state after a short delay to show the loading message
    setTimeout(() => {
      setLoadingState('');
    }, 1000);
  };

  const renderComponent = () => {
    switch (activeComponent) {
      case 1:
        return (
          <Suspense fallback={
            <div className="loading-fallback">
              <div className="loading-spinner"></div>
              <p>Memuat Komponen 1...</p>
            </div>
          }>
            <LazyLoadedComponent1 />
          </Suspense>
        );
      case 2:
        return (
          <Suspense fallback={
            <div className="loading-fallback">
              <div className="loading-spinner"></div>
              <p>Memuat Komponen 2...</p>
            </div>
          }>
            <LazyLoadedComponent2 />
          </Suspense>
        );
      case 3:
        return (
          <Suspense fallback={
            <div className="loading-fallback">
              <div className="loading-spinner"></div>
              <p>Memuat Komponen 3...</p>
            </div>
          }>
            <LazyLoadedComponent3 />
          </Suspense>
        );
      default:
        return (
          <div className="placeholder-content">
            <h3>Pilih komponen untuk dimuat</h3>
            <p>Komponen akan dimuat secara lazy (on-demand)</p>
            <div className="stats" style={{ justifyContent: 'center', marginTop: '20px' }}>
              <div className="stat-item">
                <div className="stat-value">3</div>
                <div className="stat-label">Komponen Tersedia</div>
              </div>
            </div>
          </div>
        );
    }
  };

  return (
    <div className="component-container">
      <h3>🧩 Evaluasi #4 - Code Splitting & Lazy Loading</h3>
      
      <div className="navigation">
        <button 
          className="btn btn-primary"
          onClick={() => handleLoadComponent(1)}
        >
          Muat Komponen 1
        </button>
        
        <button 
          className="btn btn-secondary"
          onClick={() => handleLoadComponent(2)}
        >
          Muat Komponen 2
        </button>
        
        <button 
          className="btn btn-danger"
          onClick={() => handleLoadComponent(3)}
        >
          Muat Komponen 3
        </button>
        
        <button 
          className="btn"
          style={{ backgroundColor: '#4F200D', color: 'white' }}
          onClick={() => setActiveComponent(null)}
        >
          Reset
        </button>
      </div>

      {loadingState && (
        <div className="console-log">
          {loadingState}
        </div>
      )}

      <div className="lazy-component-container">
        {renderComponent()}
      </div>

    </div>
  );
}

export default CodeSplittingDemo;