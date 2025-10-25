// src/components/Task4.tsx
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';

interface ToggleProps {
  render: (isOn: boolean, toggle: () => void) => React.ReactNode;
}

const Toggle: React.FC<ToggleProps> = ({ render }) => {
  const [isOn, setIsOn] = useState(false);
  const toggle = () => setIsOn(!isOn);
  return <>{render(isOn, toggle)}</>;
};

interface MouseTrackerProps {
  render: (position: { x: number; y: number }) => React.ReactNode;
}

const MouseTracker: React.FC<MouseTrackerProps> = ({ render }) => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    setPosition({ x: e.clientX, y: e.clientY });
  };

  return (
    <div
      onMouseMove={handleMouseMove}
      className="h-40 border border-gray-300 rounded-md flex items-center justify-center"
    >
      {render(position)}
    </div>
  );
};

const Task4: React.FC = () => {
  return (
    <div className="p-4 border border-gray-300 rounded-md">
      <h2 className="text-xl font-bold mb-4">Tugas 4: Render Props Pattern Implementation</h2>
      <div className="mb-6">
        <h3 className="text-lg font-semibold mb-2">Implementasi 1: Toggle</h3>
        <Toggle
          render={(isOn, toggle) => (
            <Button onClick={toggle}>{isOn ? 'Hidup' : 'Mati'}</Button>
          )}
        />
      </div>
      <div>
        <h3 className="text-lg font-semibold mb-2">Implementasi 2: Mouse Tracker</h3>
        <MouseTracker
          render={(position) => (
            <p>Posisi Mouse: ({position.x}, {position.y})</p>
          )}
        />
      </div>
    </div>
  );
};

export default Task4;