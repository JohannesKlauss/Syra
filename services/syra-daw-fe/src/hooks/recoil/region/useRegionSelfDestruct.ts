import { regionStore } from '../../../recoil/regionStore';
import { useRecoilValue } from 'recoil';
import { transportStore } from '../../../recoil/transportStore';
import { useCallback, useEffect, useRef } from 'react';
import useDeleteAudioRegion from './useDeleteAudioRegion';

// This hook is used to clean up any broken regions.
// The region listen to their audioBuffer state and if it's broken (e.g. it has a pointer, but that pointer has no actual buffer)
// Then the region will check again in a few seconds and self destruct if the statement is still true.
export default function useRegionSelfDestruct(regionId: string) {
  const audioBuffer = useRecoilValue(regionStore.audioBuffer(regionId));
  const audioBufferPointer = useRecoilValue(regionStore.audioBufferPointer(regionId));
  const isPlaying = useRecoilValue(transportStore.isPlaying);
  const isRecording = useRecoilValue(transportStore.isRecording);
  const deleteRegion = useDeleteAudioRegion(regionId);

  const shouldSelfDestruct = useCallback((executeDestruction: boolean = false) => {
      if (!isPlaying && !isRecording && audioBuffer === null && audioBufferPointer !== null) {
        if (executeDestruction) {
          deleteRegion();
        }

        return true;
      }

      return false;
  }, [audioBuffer, audioBufferPointer, isPlaying, isRecording, deleteRegion]);

  const cbRef = useRef(shouldSelfDestruct);
  cbRef.current = shouldSelfDestruct;

  useEffect(() => {
    if (cbRef.current()) {
      // If the region has no valid audio buffer it will check again in three seconds. If it's still empty the region self destructs.
      setTimeout(() => cbRef.current(true), 3000);
    }
  }, [cbRef]);
}