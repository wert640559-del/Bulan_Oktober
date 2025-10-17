import { useState } from "react";
import UnoptimizedChild from "./UnoptimizedChild";
import OptimizedChild from "./OptimizedChild"; // ⬅️ ubah tanpa kurung

export default function ParentComponent() {
  const [parentCount, setParentCount] = useState(0);
  const [otherState, setOtherState] = useState(0);

  return (
    <div>
      <h2>Contoh Memoization Component</h2>
      <p>Parent Count: {parentCount}</p>
      <p>Other State: {otherState}</p>

      <button onClick={() => setParentCount(parentCount + 1)}>Tambah Parent Count</button>
      <button onClick={() => setOtherState(otherState + 1)}>Tambah Other State</button>

      <hr />

      <UnoptimizedChild count={parentCount} />
      <OptimizedChild count={parentCount} />
    </div>
  );
}
