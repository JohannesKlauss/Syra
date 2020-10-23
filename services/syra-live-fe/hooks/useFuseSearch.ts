import { useCallback, useEffect, useRef, useState } from 'react';
import Fuse from 'fuse.js';

export default function useFuseSearch<T>(keys: string[], initialData?: ReadonlyArray<T>) {
  const fuse = useRef<Fuse<T>>();
  const [results, setResults] = useState<T[]>([]);
  const [searchString, setSearchString] = useState('');

  const initFuse = useCallback((data: ReadonlyArray<T>) => {
    fuse.current = new Fuse<T>(data, {
      keys,
    });
  }, [fuse.current, keys]);

  if (initialData) {
    fuse.current = new Fuse<T>(initialData, {
      keys,
    });
  }

  useEffect(() => {
    if (fuse.current && searchString.length > 0) {
      setResults(fuse.current.search(searchString).map(res => res.item));
    }
  }, [searchString]);

  return {
    initFuse,
    results,
    searchString,
    setSearchString,
  };
}