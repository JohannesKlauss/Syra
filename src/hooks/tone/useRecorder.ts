import { useCallback, useContext, useEffect, useState } from 'react';
import { useRecoilValue } from 'recoil/dist';
import { projectStore } from '../../recoil/projectStore';
import { ChannelContext } from '../../providers/ChannelContext';
import useToneAudioNodes from './useToneAudioNodes';
import useAsyncRegionCreator from '../recoil/useAsyncRegionCreator';

export default function useRecorder(isArmed: boolean) {
  const {audioIn, recorder} = useToneAudioNodes();
  const channelId = useContext(ChannelContext);
  const createAsyncRegion = useAsyncRegionCreator(channelId);
  const isRecording = useRecoilValue(projectStore.isRecording);
  const [intervalId, setIntervalId] = useState<any>();

  // TODO: THIS IS A HACK. ToneJs DOES NOT ALLOW ADDING LISTENERS TO THE RECORDER SO WE HIJACK THE TYPESCRIPT RESTRICTIONS.
  // TODO: WE SHOULD RAISE THIS TO ToneJs BECAUSE THIS IS UGLY AS HELL AND WAY TO COMPLICATED.
  // IT IS ALSO INSUFFICIENT. WE ARE CURRENTLY STORING THE regionCreatorCallback as a ref. This won't work with multiple Channel input recording.
  const hijackRecorder = useCallback((asyncRegionCreatorCallback: (data: Blob) => void) => {
    setIntervalId(setInterval(() => {
      if (recorder.state === 'started') {
        // @ts-ignore
        recorder._recorder.requestData();
      }
    }, 500));

    const handleDataAvailable = (e: any) => {
      asyncRegionCreatorCallback(e.data);
    };

    const handleStop = () => {
      clearInterval(intervalId);
      // @ts-ignore
      recorder._recorder.removeEventListener("dataavailable", handleDataAvailable, false);
      // @ts-ignore
      recorder._recorder.removeEventListener("stop", handleStop, false);
    };

    // @ts-ignore
    recorder._recorder.addEventListener("dataavailable", handleDataAvailable, false);
    // @ts-ignore
    recorder._recorder.addEventListener("stop", handleStop, false);
  }, [recorder, intervalId, setIntervalId]);

  useEffect(() => {
    (async () => {
      // Due to the nature of useEffect it could be that this runs when we actually are in the middle of recording.
      // This prevents breaking anything in the process.
      if (isRecording && recorder.state === 'started') {
        return;
      }

      if (!isArmed) {
        audioIn.close();
      } else {
        await audioIn.open();

        if (isRecording && recorder.state === 'stopped') {
          const regionCreatorCallback = createAsyncRegion();

          hijackRecorder(regionCreatorCallback);

          await recorder.start();
        } else if(recorder.state === 'started') {
          await recorder.stop();
        }
      }
    })();
  }, [audioIn, recorder, isRecording, isArmed, hijackRecorder, createAsyncRegion]);
}