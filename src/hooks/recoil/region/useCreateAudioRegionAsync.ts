import { createNewId } from '../../../utils/createNewId';
import useAudioContext from '../../audio/useAudioContext';
import { useRecoilCallback } from 'recoil/dist';
import { regionStore } from '../../../recoil/regionStore';
import useToneJsTransport from '../../tone/useToneJsTransport';
import { audioBufferStore } from '../../../recoil/audioBufferStore';
import { BUFFER_ID_PREFIX, REGION_ID_PREFIX } from '../../../const/ids';
import { channelStore } from '../../../recoil/channelStore';

// TODO: REFACTOR THIS TO BE COMPLIANT WITH THE NEW useChannelCreator and useRegionCreator
export default function useCreateAudioRegionAsync() {
  const ctx = useAudioContext();
  const transport = useToneJsTransport();

  return useRecoilCallback(({ set, snapshot }) => (channelId: string) => {
    const newRegionId = createNewId(REGION_ID_PREFIX);
    const newBufferId = createNewId(BUFFER_ID_PREFIX);

    const channelName = snapshot.getLoadable(channelStore.name(channelId)).contents as string;
    const staticCounter = snapshot.getLoadable(regionStore.staticCounter(channelId)).contents as number;

    const name = `${channelName}#${staticCounter}`;

    set(regionStore.staticCounter(channelId), staticCounter + 1);

    set(regionStore.ids(channelId), currVal => [...currVal, newRegionId]);
    set(regionStore.audioBufferPointer(newRegionId), newBufferId);
    set(regionStore.isRecording(newRegionId), true);
    set(regionStore.start(newRegionId), transport.seconds);
    set(regionStore.name(newRegionId), name);

    return (audioBuffer: AudioBuffer) => {
      set(audioBufferStore.ids, currVal => [...currVal, newBufferId]);
      set(audioBufferStore.buffer(newBufferId), audioBuffer);
      set(audioBufferStore.name(newBufferId), `${name}.wav`);
    };
  }, [transport, ctx]);
}