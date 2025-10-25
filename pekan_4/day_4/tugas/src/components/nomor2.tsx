// src/components/Task2.tsx
import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import { Button } from '@/components/ui/button';

const Modal: React.FC<{ isOpen: boolean; onClose: () => void; children: React.ReactNode }> = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  return ReactDOM.createPortal(
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded-lg shadow-lg max-w-sm w-full"> {/* Tambahkan max-w-sm dan w-full untuk tampilan seperti card pop-up */}
        {children}
        <Button onClick={onClose} className="mt-4">Tutup Modal</Button>
      </div>
    </div>,
    document.body // Ganti ke document.body jika 'modal-root' tidak ada, atau pastikan 'modal-root' ada di index.html
  );
};

const Task2: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="p-4 border border-gray-300 rounded-md">
      <h2 className="text-xl font-bold mb-4">Tugas 2: Membuat Portal Modal</h2>
      <Button onClick={() => setIsModalOpen(true)}>Buka Modal</Button>
      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <h3 className="text-lg font-semibold">Ini adalah Modal</h3>
        <p>Konten modal yang di-render menggunakan React Portal.</p>
      </Modal>
    </div>
  );
};

export default Task2;