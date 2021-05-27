import React, { useState } from 'react';
import AppRouter from './providers/AppRouter';
import { useHotkeys } from 'react-hotkeys-hook';
import { FpsView } from 'react-fps';
import 'focus-visible/dist/focus-visible';
import useFaviconWatcher from './hooks/ui/global/useFaviconWatcher';
import useWebMidi from './hooks/midi/useWebMidi';
import DebugShortcuts from './ui/debug/Floating/DebugShortcuts';
import { SyraEngineContext } from './providers/SyraEngineContext';
import { createSyraEngineInstance } from "./engine/SyraEngine";

function App() {
  const [showFpsMeter, setShowFpsMeter] = useState(false);
  useHotkeys('shift+f', () => setShowFpsMeter((currVal) => !currVal));
  useFaviconWatcher();
  useWebMidi();

  return (
    <SyraEngineContext.Provider value={createSyraEngineInstance()}>
      <AppRouter />
      {showFpsMeter && <FpsView />}
      {process.env.NODE_ENV !== 'production' && <DebugShortcuts/>}
    </SyraEngineContext.Provider>
  );
}

export default App;
