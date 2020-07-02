import { useEffect, useState } from 'react';
import { SoulPatch } from '../../types/SoulPatch';
import loadSoulPatch from '../../soul/loadSoulPatch';

export default function useSoulPatch(path: string) {
  const [patch, setPatch] = useState<SoulPatch | null>(null);

  useEffect(() => {
    async function loadPatch() {
      setPatch(await loadSoulPatch(path))
    }

    loadPatch();
  }, [path]);

  return patch;
}