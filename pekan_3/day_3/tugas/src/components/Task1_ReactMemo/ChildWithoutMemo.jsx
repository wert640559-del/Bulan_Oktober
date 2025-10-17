export default function ChildWithoutMemo({ count }) {
  console.log('🧒 ChildWithoutMemo di-render');
  return (
    <div style={{ padding: '10px', backgroundColor: '#FF9A00', borderRadius: '4px', margin: '10px 0' }}>
      <p>Count tanpa memo: {count}</p>
      <p style={{ fontSize: '12px', color: '#4F200D' }}>❌ Selalu di-render ulang saat parent update</p>
    </div>
  );
}
