import useWebMidiListener from "./useWebMidiListener";
import useListenForExternalMidiIn from "./useListenForExternalMidiIn";
import useUpdateMidiStore from "./useUpdateMidiStore";
import { useEffect } from "react";

export default function useWebMidi() {
  useWebMidiListener();
  const [connect, disconnect] = useListenForExternalMidiIn(useUpdateMidiStore());

  useEffect(() => {
    connect();

    return () => {
      disconnect();
    }
  }, [connect, disconnect]);
}