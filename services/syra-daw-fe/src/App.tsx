import React, { useState } from 'react';
import AppRouter from './providers/AppRouter';
import { useHotkeys } from 'react-hotkeys-hook';
import { FpsView } from 'react-fps';
import 'focus-visible/dist/focus-visible';
import useFaviconWatcher from './hooks/ui/global/useFaviconWatcher';
import useWebMidi from './hooks/midi/useWebMidi';

function App() {
  const [showFpsMeter, setShowFpsMeter] = useState(false);
  useHotkeys('shift+f', () => setShowFpsMeter((currVal) => !currVal));
  useFaviconWatcher();
  useWebMidi();

  return (
    <>
      <AppRouter />
      {showFpsMeter && <FpsView />}
    </>
  );
}

export default App;
