import { useSetRecoilState } from 'recoil/dist';
import { editorStore } from '../../../recoil/editorStore';
import { View } from '../../../types/View';

export default function useUpdateView() {
  const setShowPianoRoll = useSetRecoilState(editorStore.showPianoRoll);
  const setShowMixer = useSetRecoilState(editorStore.showMixer);

  return (view: View) => {
    switch(view) {
      case View.PIANO_ROLL:
        setShowMixer(false);
        setShowPianoRoll(val => !val);
        break;
      case View.MIXER:
        setShowPianoRoll(false);
        setShowMixer(val => !val);
        break;
    }
  };
}