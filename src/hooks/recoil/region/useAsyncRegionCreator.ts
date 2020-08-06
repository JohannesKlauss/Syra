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
    const fileReader = new FileReader();
    let recordingOffset = 0;

    fileReader.onloadend = async () => {
      const audioBuffer = await ctx.decodeAudioData(fileReader.result as ArrayBuffer);
      const data: Float32Array[] = [];

      if (recordingOffset < 0) {
        return;
      }

      for (let channel = 0; channel < audioBuffer.numberOfChannels; channel++) {
        let channelData = audioBuffer.getChannelData(channel);

        data[channel] = channelData.slice(recordingOffset * audioBuffer.sampleRate + 1);
      }

      const trimmedBuffer = ctx.createBuffer(
        audioBuffer.numberOfChannels,
        data[0].length,
        audioBuffer.sampleRate,
      );

      for (let channel = 0; channel < trimmedBuffer.numberOfChannels; channel++) {
        trimmedBuffer.copyToChannel(data[channel], channel);
      }

      set(audioBufferStore.ids, currVal => [...currVal, newBufferId]);
      set(audioBufferStore.buffer(newBufferId), trimmedBuffer);
    };

    set(regionStore.ids(channelId), currVal => [...currVal, newRegionId]);
    set(regionStore.audioBufferPointer(newRegionId), newBufferId);
    set(regionStore.isRecording(newRegionId), true);
    set(regionStore.start(newRegionId), transport.seconds);

    return (blob: Blob, offset: number) => {
      recordingOffset = offset;

      fileReader.readAsArrayBuffer(blob);
    };
  }, [transport, ctx]);
}