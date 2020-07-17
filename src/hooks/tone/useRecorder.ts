import { useContext, useEffect } from 'react';
import { useRecoilValue } from 'recoil/dist';
import { projectStore } from '../../recoil/projectStore';
import { ChannelContext } from '../../providers/ChannelContext';
import useRegionCreator from '../recoil/useRegionCreator';
import useToneAudioNodes from './useToneAudioNodes';

export default function useRecorder(isArmed: boolean) {
  const {audioIn, recorder} = useToneAudioNodes();
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
          await recorder.start();
        } else if(recorder.state === 'started') {
          const data = await recorder.stop();

          await createRegion(data);
        }
      }
    })();
  }, [audioIn, recorder, isRecording, isArmed]);
}