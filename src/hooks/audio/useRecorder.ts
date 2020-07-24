import { useContext, useEffect, useRef } from 'react';
import { ChannelContext } from '../../providers/ChannelContext';
import useAsyncRegionCreator from '../recoil/useAsyncRegionCreator';
import { useRecoilValue } from 'recoil/dist';
import { projectStore } from '../../recoil/projectStore';
import { Recorder } from '../../audio/Recorder';

export default function useRecorder() {
  const channelId = useContext(ChannelContext);
  const createAsyncRegion = useAsyncRegionCreator(channelId);
  const isRecording = useRecoilValue(projectStore.isRecording);
  const regionPushBuffer = useRef<(blob: Blob) => void>();
  const recorder = useRef(new Recorder());

  useEffect(() => {
    if (isRecording) {
      regionPushBuffer.current = createAsyncRegion();

      recorder.current.onDataAvailable = chunk => {
        console.log(chunk);
      };

      recorder.current.onComplete = blob => {
        regionPushBuffer.current && regionPushBuffer.current(blob);
      };

      recorder.current.start(1000);
    } else {
      recorder.current.stop();
    }
  }, [isRecording, recorder]);
}