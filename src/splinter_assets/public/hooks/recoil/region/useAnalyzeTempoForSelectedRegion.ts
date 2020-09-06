import { useRecoilCallback } from 'recoil/dist';
import { analyze } from 'web-audio-beat-detector';
import { projectStore } from '../../../recoil/projectStore';
import { regionStore } from '../../../recoil/regionStore';

export default function useAnalyzeTempoForSelectedRegion() {
  return useRecoilCallback(({set, snapshot}) => async () => {
    const selectedRegionIds = snapshot.getLoadable(regionStore.selectedIds).contents as string[];

    if (selectedRegionIds.length === 1) {
      let analyzedTempo: number | null = null;

      const audioBuffer = snapshot.getLoadable(regionStore.audioBuffer(selectedRegionIds[0])).contents;

      if (audioBuffer instanceof AudioBuffer) {
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