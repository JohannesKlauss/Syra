import useSystemColorScheme from '../../core/useSystemColorScheme';
import { useEffect } from 'react';

function getFaviconEl() {
  return document.getElementById('favicon');
}

export default function useFaviconWatcher() {
  const systemColorMode = useSystemColorScheme();

  useEffect(() => {
    // @ts-ignore
    getFaviconEl().href = systemColorMode === 'dark' ? '/favicon-dark.ico' : '/favicon.ico';
  }, [systemColorMode]);
}
