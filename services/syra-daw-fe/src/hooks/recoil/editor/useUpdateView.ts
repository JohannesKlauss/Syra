import { useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil';
import { editorStore } from '../../../recoil/editorStore';
import { View } from '../../../types/View';
import useOpenPianoRoll from '../../ui/views/pianoRoll/useOpenPianoRoll';
import { channelStore } from '../../../recoil/channelStore';
import { regionStore } from '../../../recoil/regionStore';
import { useCallback } from 'react';
import { ChannelType } from '../../../types/Channel';

export default function useUpdateView() {
  const setShowMixer = useSetRecoilState(editorStore.showMixer);
  const [showPianoRoll, setShowPianoRoll] = useRecoilState(editorStore.showPianoRoll);
  const openPianoRoll = useOpenPianoRoll();
  const selectedId = useRecoilValue(channelStore.selectedId);
  const type = useRecoilValue(channelStore.type(selectedId));
  const ids = useRecoilValue(regionStore.ids(selectedId));

  return useCallback(
    (view: View) => {
      switch (view) {
        case View.PIANO_ROLL:
          if (!showPianoRoll && type === ChannelType.INSTRUMENT) {
            openPianoRoll(selectedId, ids[0] || '');
            setShowPianoRoll(true);
          } else {
            setShowPianoRoll(false);
          }

          setShowMixer(false);
          break;
        case View.MIXER:
          setShowPianoRoll(false);
          setShowMixer((val) => !val);
          break;
      }
    },
    [showPianoRoll, setShowPianoRoll, setShowMixer, selectedId, ids, openPianoRoll],
  );
}