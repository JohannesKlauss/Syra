import { useCallback, useRef } from 'react';
import { createNewId } from '../../utils/createNewId';
import useAudioContext from '../audio/useAudioContext';
import { useSetRecoilState } from 'recoil/dist';
import { regionStore } from '../../recoil/regionStore';
import * as Tone from 'tone';

const REGION_ID_PREFIX = 'region-';

export default function useRegionCreator(channelId: string) {
  const audioContext = useAudioContext();
  const nextRegionId = useRef(createNewId(REGION_ID_PREFIX));

  const setAudioBuffer = useSetRecoilState(regionStore.audioBuffer(nextRegionId.current));
  const setRegionIds = useSetRecoilState(regionStore.ids(channelId));

  return useCallback(async (file: File) => {
      const audioBuffer = await audioContext.decodeAudioData(await file.arrayBuffer());
      const toneBuffer = await new Tone.Buffer(audioBuffer);

      if (toneBuffer.duration > 0) {
        setRegionIds(currVal => [...currVal, nextRegionId.current]);
        setAudioBuffer(toneBuffer);

        nextRegionId.current = createNewId(REGION_ID_PREFIX);
      }
  }, [audioContext, setRegionIds, setAudioBuffer, nextRegionId]);
}