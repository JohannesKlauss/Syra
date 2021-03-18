import useSyraEngine from "./useSyraEngine";
import { useMemo } from "react";

export default function useSyraEngineChannel(channelId: string) {
  const engine = useSyraEngine();

  return useMemo(() => {
    const tmp = engine.channels.getChannel(channelId);

    if (!tmp) {
      throw new Error('Could not find channel in SYRA_ENGINE');
    }

    return tmp;
  }, [channelId]);
}