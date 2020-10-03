import { useRef } from 'react';

export default function useWorker(path: string) {
  return useRef<Worker>(new Worker(path));
}