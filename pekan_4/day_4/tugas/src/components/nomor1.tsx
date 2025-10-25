// src/components/Task1.tsx
import React, { useRef } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

const Task1: React.FC = () => {
  const inputRef = useRef<HTMLInputElement>(null);
  const divRef = useRef<HTMLDivElement>(null);

  const focusInput = () => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  };

  const scrollToBottom = () => {
    if (divRef.current) {
      divRef.current.scrollTop = divRef.current.scrollHeight;
    }
  };

  return (
    <div className="p-4 border border-gray-300 rounded-md">
      <h2 className="text-xl font-bold mb-4">Tugas 1: Implementasi useRef untuk DOM Access</h2>
      <div className="mb-4">
        <h3 className="text-lg font-semibold">Fokus Input</h3>
        <Input ref={inputRef} type="text" placeholder="Ketik di sini..." className="mb-2" />
        <Button onClick={focusInput}>Fokus pada Input</Button>
      </div>
      <div className="mb-4">
        <h3 className="text-lg font-semibold">Scroll ke Bawah</h3>
        <div
          ref={divRef}
          className="h-32 overflow-y-auto border border-gray-200 p-2"
        >
          <p>Baris 1</p>
          <p>Baris 2</p>
          <p>Baris 3</p>
          <p>Baris 4</p>
          <p>Baris 5</p>
          <p>Baris 6</p>
          <p>Baris 7</p>
          <p>Baris 8</p>
          <p>Baris 9</p>
          <p>Baris 11</p>
          <p>Baris 12</p>
          <p>Baris 13</p>
          <p>Baris 14</p>
          <p>Baris 15</p>
          <p>Baris 16</p>
          <p>Baris 17</p>
          <p>Baris 18</p>
          <p>Baris 19</p>
          <p>Baris 20</p>
          <p>Baris 21</p>
          <p>Baris 22</p>
        </div>
        <Button onClick={scrollToBottom} variant="secondary">Scroll ke Paling Bawah</Button>
      </div>
    </div>
  );
};

export default Task1;