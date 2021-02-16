import { useRecoilCallback } from "recoil";
import { pianoRollStore } from "../../../../recoil/pianoRollStore";

export default function useOpenPianoRoll() {
  return useRecoilCallback(({set}) => (channelId: string, regionId: string) => {
    set(pianoRollStore.focusedMidiRegionId, regionId);
    set(pianoRollStore.selectedChannelId, channelId);
  }, []);
}