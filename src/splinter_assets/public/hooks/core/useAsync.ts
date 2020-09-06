import { useCallback, useEffect } from 'react';

export default function useAsync(asyncFn: CallableFunction) {
  const memoed = useCallback(() => asyncFn, [asyncFn]);

  useEffect(() => {memoed()()}, [memoed]);
}