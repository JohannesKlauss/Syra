import React from 'react';
import { Box, styled } from '@material-ui/core';
import { useRecoilValue } from 'recoil/dist';
import { audioBufferStore } from '../../../recoil/audioBufferStore';
import useTrimmedRegionWidth from '../../../hooks/ui/region/useTrimmedRegionWidth';
import { arrangeWindowStore } from '../../../recoil/arrangeWindowStore';

interface WaveformProps {
  width: number; // This is to support sharp edges on retina displays.
  height: number;
  backgroundImage: string;
}

const Waveform = styled(Box)({
  width: ({ width }: WaveformProps) => width,
  height: ({ height }: WaveformProps) => height,
  backgroundImage: ({ backgroundImage }: WaveformProps) => `url(${backgroundImage})`,
  willChange: 'transform',
  position: 'absolute',
  top: 0,
});

interface Props {
  pointCloudId: string;
}

function WindowedWaveform({ pointCloudId }: Props) {

  const trimmedWidth = useTrimmedRegionWidth();
  const trackHeight = useRecoilValue(arrangeWindowStore.trackHeight);
  const waveformImage = useRecoilValue(audioBufferStore.waveformImage(pointCloudId));

  return (
    <>
      <Waveform width={trimmedWidth} height={trackHeight} backgroundImage={waveformImage}/>
    </>
  );
}

WindowedWaveform.whyDidYouRender = true;

export default React.memo(WindowedWaveform);
