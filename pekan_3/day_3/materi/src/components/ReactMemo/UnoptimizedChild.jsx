export default function UnoptimizedChild({ count }) {
  console.log('UnoptimizedChild di-render');
  return <p>Count (Unoptimized): {count}</p>;
}
