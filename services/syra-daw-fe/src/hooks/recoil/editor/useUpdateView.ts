import {useRecoilState, useRecoilValue, useSetRecoilState} from 'recoil';
import { editorStore } from '../../../recoil/editorStore';
import { View } from '../../../types/View';
import useOpenPianoRoll from "../../ui/views/useOpenPianoRoll";
import {channelStore} from "../../../recoil/channelStore";
import {regionStore} from "../../../recoil/regionStore";

export default function useUpdateView() {
  const setShowMixer = useSetRecoilState(editorStore.showMixer);
  const [showPianoRoll, setShowPianoRoll] = useRecoilState(editorStore.showPianoRoll);
  const openPianoRoll = useOpenPianoRoll();
  const selectedId = useRecoilValue(channelStore.selectedId);
  const ids = useRecoilValue(regionStore.ids(selectedId));

  return (view: View) => {
    switch(view) {
      case View.PIANO_ROLL:
        if (!showPianoRoll) {
          openPianoRoll(selectedId, ids[0] || '');
        } else {
          setShowPianoRoll(false);
        }

        setShowMixer(false);
        break;
      case View.MIXER:
        setShowPianoRoll(false);
        setShowMixer(val => !val);
        break;
    }
  };
}