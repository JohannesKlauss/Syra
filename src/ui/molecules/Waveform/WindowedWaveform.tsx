import React from 'react';
import { Box, LinearProgress, styled } from '@material-ui/core';
import { useRecoilValue } from 'recoil/dist';
import { audioBufferStore } from '../../../recoil/audioBufferStore';
import { arrangeWindowStore } from '../../../recoil/arrangeWindowStore';

interface WaveformProps {
  height: number;
  trimStart: number;
  backgroundImage: string;
}

const Waveform = styled(Box)({
  height: ({ height }: WaveformProps) => height,
  backgroundImage: ({ backgroundImage }: WaveformProps) => `url(${backgroundImage})`,
  backgroundPositionX: ({trimStart}: WaveformProps) => -trimStart,
  width: '100%',
  position: 'absolute',
  top: 0,
  left: 0,
});

interface Props {
  pointCloudId: string;
  trimStart: number;
}

function WindowedWaveform({ pointCloudId, trimStart }: Props) {
  const trackHeight = useRecoilValue(arrangeWindowStore.trackHeight);
  const waveformImage = useRecoilValue(audioBufferStore.waveformImage(pointCloudId));

  return (
    <>
      {waveformImage.length === 0 && <LinearProgress color={'secondary'} />}
      <Waveform height={trackHeight} backgroundImage={waveformImage} trimStart={trimStart}/>
    </>
  );
}

WindowedWaveform.whyDidYouRender = true;

export default React.memo(WindowedWaveform);
