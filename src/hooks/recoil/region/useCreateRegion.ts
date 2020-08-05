import { useRecoilCallback } from 'recoil/dist';
import { createNewId } from '../../../utils/createNewId';
import { BUFFER_ID_PREFIX, REGION_ID_PREFIX } from '../../../const/ids';
import useAudioContext from '../../audio/useAudioContext';
import { regionStore } from '../../../recoil/regionStore';
import { audioBufferStore } from '../../../recoil/audioBufferStore';
import { analyze } from 'web-audio-beat-detector';
import { projectStore } from '../../../recoil/projectStore';

export default function useCreateRegion() {
  const audioContext = useAudioContext();

  return useRecoilCallback(({ set }) => async (channelId: string, file: File, start: number = 0, regionId?: string) => {
    const newRegionId = regionId ?? createNewId(REGION_ID_PREFIX);
    const newBufferId = createNewId(BUFFER_ID_PREFIX);

    const audioBuffer = await audioContext.decodeAudioData(await file.arrayBuffer());

    if (audioBuffer.duration > 0) {
      set(audioBufferStore.ids, currVal => [...currVal, newBufferId]);
      set(audioBufferStore.buffer(newBufferId), audioBuffer);

      set(regionStore.ids(channelId), currVal => [...currVal, newRegionId]);
      set(regionStore.audioBufferPointer(newRegionId), newBufferId);
      set(regionStore.start(newRegionId), start);

      let analyzedTempo: number | null = null;

      try {
        analyzedTempo = await analyze(audioBuffer);
      } catch (e) {
      }

      if (analyzedTempo) {
        analyzedTempo = Math.round(analyzedTempo * 100) / 100;

        set(projectStore.lastAnalyzedBpmFromImport, analyzedTempo);
      }
    }
  }, []);
}