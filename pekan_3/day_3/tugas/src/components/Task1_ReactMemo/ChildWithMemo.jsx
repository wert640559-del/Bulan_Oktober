
import React from "react";

const ChildWithMemo = React.memo(function ChildWithMemo({ count }) {
  console.log('🧠 ChildWithMemo di-render');
  return (
    <div style={{ padding: '10px', backgroundColor: '#FFD93D', borderRadius: '4px', margin: '10px 0' }}>
      <p>Count dengan memo: {count}</p>
      <p style={{ fontSize: '12px', color: '#4F200D' }}>✅ Hanya di-render jika props berubah</p>
    </div>
  );
});

export default ChildWithMemo;