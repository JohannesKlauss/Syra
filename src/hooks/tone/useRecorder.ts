import { useContext, useEffect } from 'react';
import * as Tone from 'tone';
import { useRecoilValue } from 'recoil/dist';
import { projectStore } from '../../recoil/projectStore';
import { ChannelContext } from '../../providers/ChannelContext';
import useRegionCreator from '../recoil/useRegionCreator';

export default function useRecorder(isArmed: boolean, audioIn: Tone.UserMedia, toneRecorder: Tone.Recorder) {
  const channelId = useContext(ChannelContext);
  const createRegion = useRegionCreator(channelId);
  const isRecording = useRecoilValue(projectStore.isRecording);

  useEffect(() => {
    (async () => {
      if (!isArmed) {
        audioIn.close();
      } else {
        await audioIn.open();

        if (isRecording) {
          await toneRecorder.start();
        } else if(toneRecorder.state === 'started') {
          const data = await toneRecorder.stop();

          await createRegion(data);
        }
      }
    })();
  }, [audioIn, toneRecorder, isRecording, isArmed]);
}