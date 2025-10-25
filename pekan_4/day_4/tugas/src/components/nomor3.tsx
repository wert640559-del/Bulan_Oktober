// src/components/Task3.tsx
import React, { useState, useEffect, ComponentType } from 'react';
import { Loader2 } from 'lucide-react';

interface WithLoadingProps {
  isLoading: boolean;
}

function withLoading<P extends object>(WrappedComponent: ComponentType<P>) {
  const WithLoading: React.FC<P & WithLoadingProps> = ({ isLoading, ...props }) => {
    if (isLoading) {
      return (
        <div className="flex items-center justify-center p-4">
          <Loader2 className="animate-spin mr-2" />
          <p>Memuat...</p>
        </div>
      );
    }
    return <WrappedComponent {...(props as P)} />;
  };
  return WithLoading;
}

interface DataDisplayProps {
  data: string[];
}

const DataDisplay: React.FC<DataDisplayProps> = ({ data }) => {
  return (
    <ul className="list-disc pl-5">
      {data.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ul>
  );
};

const DataDisplayWithLoading = withLoading(DataDisplay);

const Task3: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState<string[]>([]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setData(['Data 1', 'Data 2', 'Data 3']);
      setIsLoading(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="p-4 border border-gray-300 rounded-md">
      <h2 className="text-xl font-bold mb-4">Tugas 3: Custom HOC Creation</h2>
      <DataDisplayWithLoading isLoading={isLoading} data={data} />
    </div>
  );
};

export default Task3;