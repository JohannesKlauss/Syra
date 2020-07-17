import { useEffect } from 'react';

export default function useConnectDisconnect(connect: () => void, disconnect: () => void, isMuted: boolean, isArmed: boolean) {
  useEffect(() => {
    connect();

    return () => disconnect();
  }, [isMuted, isArmed, connect, disconnect]);
}