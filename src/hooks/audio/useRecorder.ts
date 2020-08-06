import { useEffect, useRef } from 'react';
import useAsyncRegionCreator from '../recoil/region/useAsyncRegionCreator';
import { useRecoilValue } from 'recoil/dist';
import { Recorder } from '../../audio/Recorder';
import { channelStore } from '../../recoil/channelStore';
import { transportStore } from '../../recoil/transportStore';

export default function useRecorder(channelId: string) {
  const isArmed = useRecoilValue(channelStore.isArmed(channelId));
  const createAsyncRegion = useAsyncRegionCreator();
  const isRecording = useRecoilValue(transportStore.isRecording);
  const regionPushBuffer = useRef<(blob: Blob, offset: number) => void>();
  const recorder = useRef(new Recorder());

  useEffect(() => {
    if (isRecording && isArmed) {
      if (recorder.current.isRecording()) {
        return;
      }

      regionPushBuffer.current = createAsyncRegion(channelId);

      recorder.current.onComplete = (blob, offset) => {
        regionPushBuffer.current && regionPushBuffer.current(blob, offset);
      };

      // TODO: THE RECORDER ISN'T SAMPLE ACCURATE. FIND A WAY TO HACK IN A MARKER THAT IS SYNCED TO THE TRANSPORT TIME.
      recorder.current.start(1000);
    } else {
      recorder.current.stop();
    }
  }, [isRecording, recorder, isArmed, createAsyncRegion, channelId]);
}