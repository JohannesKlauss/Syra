import { useRecoilCallback } from "recoil";
import { pianoRollStore } from "../../../../recoil/pianoRollStore";
import { editorStore } from "../../../../recoil/editorStore";

export default function useOpenPianoRoll() {
  return useRecoilCallback(({set}) => (channelId: string, regionId: string) => {
    set(pianoRollStore.focusedMidiRegionId, regionId);
    set(pianoRollStore.selectedChannelId, channelId);
    set(editorStore.showPianoRoll, true);
    set(editorStore.showMixer, false);
  }, []);
}