import React from 'react';

export default function SlowComponent() {
  console.log('🐢 SlowComponent render');
  let total = 0;
  for (let i = 0; i < 50000000; i++) {
    total += Math.sqrt(i);
  }
  return <div style={{ background: '#F1948A', padding: '10px' }}>🐢 Komponen Lambat</div>;
}
