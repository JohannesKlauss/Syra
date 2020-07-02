import { useRef } from 'react';

export default function useAudioContext() {
  const ctx = useRef(new window.AudioContext());

  return ctx.current;
}