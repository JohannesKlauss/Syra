import { useCallback, useRef } from 'react';
import { createNewId } from '../../../utils/createNewId';
import useAudioContext from '../../audio/useAudioContext';
import { useSetRecoilState } from 'recoil/dist';
import { regionStore } from '../../../recoil/regionStore';
import * as Tone from 'tone';
import { BUFFER_ID_PREFIX, REGION_ID_PREFIX } from '../../../const/ids';
import { audioBufferStore } from '../../../recoil/audioBufferStore';

export default function useRegionCreator(channelId: string) {
  const audioContext = useAudioContext();
  const nextRegionId = useRef(createNewId(REGION_ID_PREFIX));
  const nextBufferId = useRef(createNewId(BUFFER_ID_PREFIX));

  const setBufferStore = useSetRecoilState(audioBufferStore.buffer(nextBufferId.current));
  const setBufferStoreIds = useSetRecoilState(audioBufferStore.ids);

  const setAudioBufferPointer = useSetRecoilState(regionStore.audioBufferPointer(nextRegionId.current));
  const setStart = useSetRecoilState(regionStore.start(nextRegionId.current));
  const setRegionIds = useSetRecoilState(regionStore.ids(channelId));

  return useCallback(async (file: File | Blob, start: number = 0) => {
    const audioBuffer = await audioContext.decodeAudioData(await file.arrayBuffer());
    const toneBuffer = await new Tone.Buffer(audioBuffer);

    if (toneBuffer.duration > 0) {
      setRegionIds(currVal => [...currVal, nextRegionId.current]);
      setBufferStoreIds(currVal => [...currVal, nextBufferId.current]);
      setBufferStore(toneBuffer);
      setAudioBufferPointer(nextBufferId.current);
      setStart(start);

      nextBufferId.current = createNewId(BUFFER_ID_PREFIX);
      nextRegionId.current = createNewId(REGION_ID_PREFIX);
    }
  }, [audioContext, setRegionIds, setAudioBufferPointer, setBufferStore, setStart, setBufferStoreIds, nextBufferId, nextRegionId]);
}