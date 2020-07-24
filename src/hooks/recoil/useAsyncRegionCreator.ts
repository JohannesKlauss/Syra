import { useCallback, useRef } from 'react';
import { createNewId } from '../../utils/createNewId';
import useAudioContext from '../audio/useAudioContext';
import { useSetRecoilState } from 'recoil/dist';
import { regionStore } from '../../recoil/regionStore';
import * as Tone from 'tone';
import useToneJsTransport from '../tone/useToneJsTransport';

const REGION_ID_PREFIX = 'region-';

export default function useAsyncRegionCreator(channelId: string) {
  const ctx = useAudioContext();
  const transport = useToneJsTransport();
  const audioContext = useAudioContext();
  const nextRegionId = useRef(createNewId(REGION_ID_PREFIX));

  const setRegionStart = useSetRecoilState(regionStore.start(nextRegionId.current));
  const setIsRecording = useSetRecoilState(regionStore.isRecording(nextRegionId.current));
  const setAudioBuffer = useSetRecoilState(regionStore.audioBuffer(nextRegionId.current));
  const setRegionIds = useSetRecoilState(regionStore.ids(channelId));

  return useCallback(() => {
    const FIXED_REGION_ID = nextRegionId.current;
    const fileReader = new FileReader();

    fileReader.onloadend = async () => {
      const audioBuffer = await ctx.decodeAudioData(fileReader.result as ArrayBuffer);

      setAudioBuffer(new Tone.ToneAudioBuffer(audioBuffer))
    };

    setRegionIds(currVal => [...currVal, FIXED_REGION_ID]);
    setIsRecording(true);
    setRegionStart(transport.seconds);

    nextRegionId.current = createNewId(REGION_ID_PREFIX);

    return (blob: Blob) => {
      fileReader.readAsArrayBuffer(blob);
    }
  }, [audioContext, setRegionIds, setAudioBuffer, nextRegionId, setIsRecording, setRegionStart]);
}