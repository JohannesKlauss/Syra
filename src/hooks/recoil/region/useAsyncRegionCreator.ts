import { createNewId } from '../../../utils/createNewId';
import useAudioContext from '../../audio/useAudioContext';
import { useRecoilCallback } from 'recoil/dist';
import { regionStore } from '../../../recoil/regionStore';
import useToneJsTransport from '../../tone/useToneJsTransport';
import { audioBufferStore } from '../../../recoil/audioBufferStore';
import { BUFFER_ID_PREFIX, REGION_ID_PREFIX } from '../../../const/ids';

// TODO: REFACTOR THIS TO BE COMPLIANT WITH THE NEW useChannelCreator and useRegionCreator
export default function useAsyncRegionCreator() {
  const ctx = useAudioContext();
  const transport = useToneJsTransport();

  return useRecoilCallback(({ set }) => (channelId: string) => {
    const newRegionId = createNewId(REGION_ID_PREFIX);
    const newBufferId = createNewId(BUFFER_ID_PREFIX);

    set(regionStore.ids(channelId), currVal => [...currVal, newRegionId]);
    set(regionStore.audioBufferPointer(newRegionId), newBufferId);
    set(regionStore.isRecording(newRegionId), true);
    set(regionStore.start(newRegionId), transport.seconds);

    return (audioBuffer: AudioBuffer) => {
      set(audioBufferStore.ids, currVal => [...currVal, newBufferId]);
      set(audioBufferStore.buffer(newBufferId), audioBuffer);
    };
  }, [transport, ctx]);
}