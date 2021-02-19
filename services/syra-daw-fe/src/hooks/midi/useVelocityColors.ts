import { useTheme } from '@chakra-ui/react';
import interpolate from 'color-interpolate';
import { useCallback } from "react";

export default function useVelocityColors() {
  const theme = useTheme();

  const colorMap = interpolate([
    theme.colors.blue[700],
    theme.colors.blue[300],
    theme.colors.green[300],
    theme.colors.red[300],
  ]);

  // normalizedVelocity ranges from 0..1
  return useCallback((velocity: number) => {
      return colorMap(velocity / 127);
  }, [colorMap]);
}
