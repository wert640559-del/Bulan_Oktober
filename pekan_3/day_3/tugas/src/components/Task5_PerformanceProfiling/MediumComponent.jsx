import React from 'react';

export default function MediumComponent() {
  console.log('⚙️ MediumComponent render');
  let total = 0;
  for (let i = 0; i < 5000000; i++) {
    total += i;
  }
  return <div style={{ background: '#F9E79F', padding: '10px' }}>⚙️ Komponen Sedang</div>;
}
