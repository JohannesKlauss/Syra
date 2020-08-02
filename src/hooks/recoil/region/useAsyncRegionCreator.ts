import { useCallback, useRef } from 'react';
import { createNewId } from '../../../utils/createNewId';
import useAudioContext from '../../audio/useAudioContext';
import { useSetRecoilState } from 'recoil/dist';
import { regionStore } from '../../../recoil/regionStore';
import useToneJsTransport from '../../tone/useToneJsTransport';
import { audioBufferStore } from '../../../recoil/audioBufferStore';
import { BUFFER_ID_PREFIX, REGION_ID_PREFIX } from '../../../const/ids';

// TODO: REFACTOR THIS TO BE COMPLIANT WITH THE NEW useChannelCreator and useRegionCreator
export default function useAsyncRegionCreator(channelId: string) {
  const ctx = useAudioContext();
  const transport = useToneJsTransport();
  const nextRegionId = useRef(createNewId(REGION_ID_PREFIX));
  const nextBufferId = useRef(createNewId(BUFFER_ID_PREFIX));

  const setBufferStore = useSetRecoilState(audioBufferStore.buffer(nextBufferId.current));
  const setBufferStoreIds = useSetRecoilState(audioBufferStore.ids);

  const setRegionStart = useSetRecoilState(regionStore.start(nextRegionId.current));
  const setIsRecording = useSetRecoilState(regionStore.isRecording(nextRegionId.current));
  const setAudioBufferPointer = useSetRecoilState(regionStore.audioBufferPointer(nextRegionId.current));
  const setRegionIds = useSetRecoilState(regionStore.ids(channelId));

  return useCallback(() => {
    const FIXED_REGION_ID = nextRegionId.current;
    const FIXED_BUFFER_ID = nextBufferId.current;
    const fileReader = new FileReader();

    fileReader.onloadend = async () => {
      const audioBuffer = await ctx.decodeAudioData(fileReader.result as ArrayBuffer);

      setBufferStoreIds(currVal => [...currVal, FIXED_BUFFER_ID]);
      setBufferStore(audioBuffer);
    };

    setRegionIds(currVal => [...currVal, FIXED_REGION_ID]);
    setAudioBufferPointer(FIXED_BUFFER_ID);
    setIsRecording(true);
    setRegionStart(transport.seconds);

    nextRegionId.current = createNewId(REGION_ID_PREFIX);
    nextBufferId.current = createNewId(BUFFER_ID_PREFIX);

    return (blob: Blob) => {
      fileReader.readAsArrayBuffer(blob);
    }
  }, [setRegionIds, ctx, transport, setBufferStoreIds, setBufferStore, setAudioBufferPointer, nextRegionId, nextBufferId, setIsRecording, setRegionStart]);
}