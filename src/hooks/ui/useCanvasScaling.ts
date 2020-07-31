import { RefObject, useEffect } from 'react';

export default function useCanvasScaling(canvasRef: RefObject<HTMLCanvasElement>, width: number, height: number) {
  useEffect(() => {
    const ctx = canvasRef.current && canvasRef.current.getContext('2d');

    if (ctx && canvasRef.current) {
      const scale = window.devicePixelRatio;

      canvasRef.current.width = Math.floor(width * scale);
      canvasRef.current.height = Math.floor(height * scale);

      console.log('scale');

      ctx.scale(scale, scale);
    }
  }, [width, height, canvasRef]);
}