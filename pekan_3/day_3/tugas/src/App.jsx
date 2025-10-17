import React, { useState } from 'react';
import './App.css';

// Task 1: React.memo
import ParentComponent from './components/Task1_ReactMemo/ParentComponent';

// Task 2: useMemo
import ExpensiveCalculationComponent from './components/Task2_UseMemo/ExpensiveCalculationComponent';

// Task 3: useCallback
import ParentComponentWithCallback from './components/Task3_UseCallback/ParentComponentWithCallback';

// Task 4: Code Splitting
import CodeSplittingDemo from './components/Task4_CodeSplitting/CodeSplittingDemo';

// Task 5: Performance Profiling
import ProfilingComponent from './components/Task5_PerformanceProfiling/ProfilingComponent';
import ParentComponent5 from './components/Task5_PerformanceProfiling/ParentComponent5';

function App() {
  const [activeTask, setActiveTask] = useState(1);

  const renderTask = () => {
    switch (activeTask) {
      case 1:
        return <ParentComponent />;
      case 2:
        return <ExpensiveCalculationComponent />;
      case 3:
        return <ParentComponentWithCallback />;
      case 4:
        return <CodeSplittingDemo />;
      case 5:
        return <ProfilingComponent />;
      default:
        return <ParentComponent />;
    }
  };

  return (
    <div>
      {/* nomor 1 */}
      <ParentComponent />;

      {/* nomor 2 */}
      <ExpensiveCalculationComponent />;

      {/* nomor 3 */}
       <ParentComponentWithCallback />;

       {/* nomor 4 */}
       <CodeSplittingDemo />;

       {/* nomor 5 */}
     <ProfilingComponent />;
     <ParentComponent5 />
    </div>
  );
}

export default App;