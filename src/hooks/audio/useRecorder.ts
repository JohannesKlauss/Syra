import { useContext, useEffect, useRef } from 'react';
import { ChannelContext } from '../../providers/ChannelContext';
import useAsyncRegionCreator from '../recoil/region/useAsyncRegionCreator';
import { useRecoilValue } from 'recoil/dist';
import { projectStore } from '../../recoil/projectStore';
import { Recorder } from '../../audio/Recorder';
import useAsyncWaveformWorker from './useAsyncWaveformWorker';
import { channelStore } from '../../recoil/channelStore';

export default function useRecorder() {
  const channelId = useContext(ChannelContext);
  const isArmed = useRecoilValue(channelStore.isArmed(channelId));
  const createAsyncRegion = useAsyncRegionCreator(channelId);
  const onDataAvailable = useAsyncWaveformWorker();
  const isRecording = useRecoilValue(projectStore.isRecording);
  const regionPushBuffer = useRef<(blob: Blob) => void>();
  const recorder = useRef(new Recorder());

  useEffect(() => {
    recorder.current.onDataAvailable = onDataAvailable;
  }, [onDataAvailable]);

  useEffect(() => {
    if (isRecording && isArmed) {
      if (recorder.current.isRecording()) {
        return;
      }

      regionPushBuffer.current = createAsyncRegion();

      recorder.current.onComplete = blob => {
        regionPushBuffer.current && regionPushBuffer.current(blob);
      };

      // TODO: THE RECORDER ISN'T SAMPLE ACCURATE. FIND A WAY TO HACK IN A MARKER THAT IS SYNCED TO THE TRANSPORT TIME.
      recorder.current.start(1000);
    } else {
      recorder.current.stop();
    }
  }, [isRecording, recorder, isArmed, createAsyncRegion]);
}