import { useSetRecoilState } from 'recoil';
import { editorStore } from '../../../recoil/editorStore';
import { WindowView } from '../../../types/WindowView';

export default function useUpdateView() {
  const setShowPianoRoll = useSetRecoilState(editorStore.showPianoRoll);
  const setShowMixer = useSetRecoilState(editorStore.showMixer);

  return (view: WindowView) => {
    switch(view) {
      case WindowView.PIANO_ROLL:
        setShowMixer(false);
        setShowPianoRoll(val => !val);
        break;
      case WindowView.MIXER:
        setShowPianoRoll(false);
        setShowMixer(val => !val);
        break;
    }
  };
}