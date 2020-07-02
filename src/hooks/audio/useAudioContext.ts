import { useRef } from 'react';

export default function useAudioContext() {
  const ctx = useRef(new window.AudioContext());

  if (ctx.current.state !== 'running') {
    ctx.current.resume();
  }

  return ctx.current;
}