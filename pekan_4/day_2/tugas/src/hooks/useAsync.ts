// src/hooks/useAsync.ts
import { useState, useEffect, useCallback, useRef } from 'react';

interface UseAsyncResult<T> {
  data: T | null;
  loading: boolean;
  error: string | null;
  execute: (params?: any) => Promise<T | null>;
  reset: () => void;
}

interface UseAsyncOptions<T> {
  immediate?: boolean;
  initialData?: T | null;
  onSuccess?: (data: T) => void;
  onError?: (error: string) => void;
}

function useAsync<T>(
  asyncFunction: (params?: any) => Promise<T>,
  options: UseAsyncOptions<T> = {}
): UseAsyncResult<T> {
  const {
    immediate = false,
    initialData = null,
    onSuccess,
    onError
  } = options;

  const [data, setData] = useState<T | null>(initialData);
  const [loading, setLoading] = useState<boolean>(immediate);
  const [error, setError] = useState<string | null>(null);
  
  const mountedRef = useRef<boolean>(true);

  const execute = useCallback(async (params?: any): Promise<T | null> => {
    try {
      setLoading(true);
      setError(null);

      const result = await asyncFunction(params);

      if (mountedRef.current) {
        setData(result);
        setLoading(false);
        onSuccess?.(result);
        return result;
      }

      return null;
    } catch (err: any) {
      if (mountedRef.current) {
        const errorMessage = err.message || 'An error occurred';
        setError(errorMessage);
        setLoading(false);
        onError?.(errorMessage);
      }
      return null;
    }
  }, [asyncFunction, onSuccess, onError]);

  const reset = useCallback((): void => {
    setData(initialData);
    setLoading(false);
    setError(null);
  }, [initialData]);

  useEffect(() => {
    if (immediate) {
      execute();
    }

    return () => {
      mountedRef.current = false;
    };
  }, [execute, immediate]);

  return {
    data,
    loading,
    error,
    execute,
    reset
  };
}

export default useAsync;