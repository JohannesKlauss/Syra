import { useEffect, useRef, useState } from 'react';

export default function useWavesurfer(containerId: string, src: string) {
  const wave = useRef<any>();
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    if (window !== undefined) {
      (async () => {
        const WaveSurfer = (await import('wavesurfer.js')).default;

        wave.current = WaveSurfer.create({
          barWidth: 2,
          barGap: 5,
          cursorWidth: 1,
          container: `#${containerId}`,
          backend: 'WebAudio',
          height: 80,
          progressColor: '#319795',
          responsive: true,
          waveColor: '#F7FAFC',
          cursorColor: 'transparent',
          xhr: {
            // @ts-ignore
            mode: 'no-cors',
          },
        });

        wave.current.load(src);

        wave.current.on('play', () => setIsPlaying(true));
        wave.current.on('pause', () => setIsPlaying(false));
        wave.current.on('finish', () => setIsPlaying(false));
      })();
    }
  }, [wave, containerId]);

  return { wave, isPlaying };
}