import useSystemColorScheme from "./useSystemColorScheme";

export default function useFaviconWatcher() {
  const systemColorMode = useSystemColorScheme();

  return systemColorMode === 'dark' ? '/favicon-dark.ico' : '/favicon.ico'
}
