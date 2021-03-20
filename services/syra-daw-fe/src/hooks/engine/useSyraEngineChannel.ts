import useSyraEngine from "./useSyraEngine";
import { useMemo } from "react";
import { channelStore } from "../../recoil/channelStore";
import { useRecoilValue } from "recoil";

export default function useSyraEngineChannel(channelId: string) {
  const engine = useSyraEngine();
  const type = useRecoilValue(channelStore.type(channelId));
  const mode = useRecoilValue(channelStore.mode(channelId));
  const name = useRecoilValue(channelStore.name(channelId));

  return useMemo(() => {
    const tmp = engine.channels.getChannel(channelId);

    if (!tmp) {
      // Throwing a promise instead of returning it causes the hook to suspense.
      throw engine.channels.createChannel(channelId, type, mode, name ?? 'Unnamed Channel');
    }

    return tmp;
  }, [channelId, type, mode, name]);
}