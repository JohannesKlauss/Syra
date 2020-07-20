import { useEffect } from 'react';
import useToneJsTransport from './useToneJsTransport';
import useToneAudioNodes from './useToneAudioNodes';

export default function useSyncPlayersToTransport() {
  const transport = useToneJsTransport();
  const {players} = useToneAudioNodes();

  useEffect(() => {
    transport.on('stop', () => {
      players.stopAll();
    });
  }, [transport, players]);
}