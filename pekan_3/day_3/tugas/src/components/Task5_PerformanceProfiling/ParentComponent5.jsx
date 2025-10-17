import React, { useState } from 'react';
import FastComponent from './FastComponent';
import MediumComponent from './MediumComponent';
import SlowComponent from './SlowComponent';

export default function ParentComponent5() {
  const [count, setCount] = useState(0);
  const [random, setRandom] = useState(0);

  console.log('🔁 ParentComponent di-render');

  return (
    <div style={{ padding: '20px' }}>
      <h2>🧠 Performance Profiling Demo</h2>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Tambah Count</button>
      <button onClick={() => setRandom(Math.random())}>Ubah Random State</button>

      <div style={{ display: 'grid', gap: '20px', marginTop: '20px' }}>
        <FastComponent />
        <MediumComponent />
        <SlowComponent />
      </div>
    </div>
  );
}
