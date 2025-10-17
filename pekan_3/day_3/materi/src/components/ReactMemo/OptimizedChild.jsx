import React from "react";

const OptimizedChild = React.memo(({ count }) => {
  console.log("OptimizedChild di-render");
  return <p>Count (Optimized): {count}</p>;
});

export default OptimizedChild;
