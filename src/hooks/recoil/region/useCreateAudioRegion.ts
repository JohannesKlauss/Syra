import { useRecoilCallback } from 'recoil';
import { createNewId } from '../../../utils/createNewId';
import { BUFFER_ID_PREFIX, REGION_ID_PREFIX } from '../../../const/ids';
import useAudioContext from '../../audio/useAudioContext';
import { regionStore } from '../../../recoil/regionStore';
import { audioBufferStore } from '../../../recoil/audioBufferStore';
import { analyze } from 'web-audio-beat-detector';
import { projectStore } from '../../../recoil/projectStore';

export default function useCreateAudioRegion() {
  const audioContext = useAudioContext();

  return useRecoilCallback(({ set, snapshot }) => async (channelId: string, file: File, start: number = 0, analyzeTempo: boolean = false, regionId?: string) => {
    const newRegionId = regionId ?? createNewId(REGION_ID_PREFIX);
    const newBufferId = createNewId(BUFFER_ID_PREFIX);

    const audioBuffer = await audioContext.decodeAudioData(await file.arrayBuffer());

    const staticCounter = snapshot.getLoadable(regionStore.staticCounter(channelId)).contents as number;

    if (audioBuffer.duration > 0) {
      set(audioBufferStore.ids,currVal => [...currVal, newBufferId]);
      set(audioBufferStore.buffer(newBufferId), audioBuffer);
      set(audioBufferStore.name(newBufferId), file.name);

      set(regionStore.ids(channelId), currVal => [...currVal, newRegionId]);
      set(regionStore.audioBufferPointer(newRegionId), newBufferId);
      set(regionStore.start(newRegionId), start);
      set(regionStore.trimEnd(newRegionId), audioBuffer.duration);
      set(regionStore.name(newRegionId), `${file.name.replace(/\.[^/.]+$/, "")}#${staticCounter}`);

      set(regionStore.staticCounter(channelId), staticCounter + 1);

      if (analyzeTempo) {
        let analyzedTempo: number | null = null;

        try {
          analyzedTempo = await analyze(audioBuffer);
        } catch (e) {
        }

        if (analyzedTempo) {
          // Trim the analyzed tempo to two decimal points.
          analyzedTempo = Math.round(analyzedTempo * 100) / 100;

          set(projectStore.lastAnalyzedBpmFromImport, analyzedTempo);
        }
      }
    }
  }, []);
}