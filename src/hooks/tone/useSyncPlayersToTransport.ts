import { useEffect } from 'react';
import useToneJsTransport from './useToneJsTransport';
import * as Tone from 'tone';

export default function useSyncPlayersToTransport(tonePlayers: Tone.Players) {
  const transport = useToneJsTransport();

  useEffect(() => {
    transport.on('stop', () => tonePlayers.stopAll());
  }, []);
}