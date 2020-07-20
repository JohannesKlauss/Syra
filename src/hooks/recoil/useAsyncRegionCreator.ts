import { useCallback, useRef } from 'react';
import { createNewId } from '../../utils/createNewId';
import useAudioContext from '../audio/useAudioContext';
import { useSetRecoilState } from 'recoil/dist';
import { regionStore } from '../../recoil/regionStore';
import * as Tone from 'tone';

const REGION_ID_PREFIX = 'region-';

export default function useAsyncRegionCreator(channelId: string) {
  const audioContext = useAudioContext();
  const nextRegionId = useRef(createNewId(REGION_ID_PREFIX));

  const setIsRecording = useSetRecoilState(regionStore.isRecording(nextRegionId.current));
  const setAudioBuffer = useSetRecoilState(regionStore.audioBuffer(nextRegionId.current));
  const setRegionIds = useSetRecoilState(regionStore.ids(channelId));

  return useCallback(() => {
    const FIXED_REGION_ID = nextRegionId.current;
    const chunks: Blob[] = [];
    const fileReader = new FileReader();

    setRegionIds(currVal => [...currVal, FIXED_REGION_ID]);
    setIsRecording(true);

    nextRegionId.current = createNewId(REGION_ID_PREFIX);

    fileReader.onloadend = async () => {
      if (fileReader.result) {
        const audioBuffer = await audioContext.decodeAudioData(fileReader.result as ArrayBuffer);
        const toneBuffer = await new Tone.Buffer(audioBuffer);
        setAudioBuffer(toneBuffer);
      }
    };

    const read = () => {
      fileReader.readAsArrayBuffer(new Blob(chunks, { type: 'audio/webm;codecs=opus' }));
    };

    return (data: Blob) => {
      chunks.push(data);

      requestAnimationFrame(read);
    }
  }, [audioContext, setRegionIds, setAudioBuffer, nextRegionId]);
}