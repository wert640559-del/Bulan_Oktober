import React, { useRef, FC } from 'react';

interface TextInputWithFocusButtonProps {}

const TextInputWithFocusButton: FC<TextInputWithFocusButtonProps> = () => {
  const inputRef = useRef<HTMLInputElement | null>(null);

  const focusInput = () => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  };

  return (
    <div>
      <h2>useRef: Mengakses DOM</h2>
      <input type="text" ref={inputRef} />
      <button onClick={focusInput}>Fokus pada Input</button>
    </div>
  );
};

interface PersistentCounterProps {}

const PersistentCounter: FC<PersistentCounterProps> = () => {
  const countRef = useRef<number>(0);

  const increment = () => {
    countRef.current += 1;
    console.log('Count (ref):', countRef.current);
  };

  return (
    <div>
      <h2>useRef: Menyimpan Nilai Persisten</h2>
      <p>Nilai dalam ref (cek konsol): {countRef.current}</p>
      <button onClick={increment}>Tambah Ref</button>
      <p>
        *Perubahan nilai ref tidak memicu re-render. Untuk melihat perubahan di UI,
        Anda perlu memicu re-render secara manual (misalnya dengan state lain).
      </p>
    </div>
  );
};

const UseRef: FC = () => {
  return (
    <div>
      <TextInputWithFocusButton />
      <hr />
      <PersistentCounter />
    </div>
  );
};

export default UseRef;