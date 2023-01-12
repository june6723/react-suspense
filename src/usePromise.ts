import { useEffect, useState } from 'react';

const usePromise = <I, T>(promise: (arg: I) => Promise<T>, arg: I): [T | undefined] => {
  const [_promise, _setPromise] = useState<Promise<void>>();
  const [status, setStatus] = useState<'pending' | 'fulfilled' | 'error'>('pending');
  const [result, setResult] = useState<T>();
  const [error, setError] = useState<Error>();

  const resolvePromise = (result: T) => {
    setStatus('fulfilled');
    setResult(result);
  };
  const rejectPromise = (error: Error) => {
    setStatus('error');
    setError(error);
  };

  useEffect(() => {
    setStatus('pending');
    const response = promise(arg).then(resolvePromise, rejectPromise);
    _setPromise(response);
  }, [arg]);

  if (status === 'pending' && _promise) {
    throw _promise;
  }
  if (error) {
    throw error;
  }
  return [result];
};

export default usePromise;
