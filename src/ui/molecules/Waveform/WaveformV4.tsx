import React from 'react';
import { PixiComponent, Stage } from '@inlet/react-pixi';
import { Graphics } from 'pixi.js';
import { audioBufferStore } from '../../../recoil/audioBufferStore';
import { useRecoilValue } from 'recoil';
import useDownsampleAudioBuffer from '../../../hooks/audio/useDownsampleAudioBuffer';
import { Box, styled } from '@material-ui/core';
import { arrangeWindowStore } from '../../../recoil/arrangeWindowStore';
import { DPR } from '../../../const/ui';

const Bar = PixiComponent<{x: number, y: number, height: number, color: number}, Graphics>('Rectangle', {
  create: () => new Graphics(),
  applyProps: (instance, oldProps, props) => {
    const { x, y, height, color } = props;

    if (height !== oldProps.height) {
      instance.clear();
      instance.beginFill(color);
      instance.drawRect(x, y, 1, height / 2);
      instance.endFill();
    }
  },
});

interface WaveformProps {
  height: number;
}

const Waveform = styled(Box)({
  height: ({ height }: WaveformProps) => height,
  width: '100%',
  position: 'absolute',
  top: 0,
  left: 0,
});

interface Props {
  bufferId: string;
  trimStart: number;
}

function WaveformV4({bufferId, trimStart}: Props) {
  useDownsampleAudioBuffer(bufferId);

  const trackHeight = useRecoilValue(arrangeWindowStore.trackHeight);
  const pixelPeaks = useRecoilValue(audioBufferStore.pixelPeaks(bufferId));

  return (
    <Waveform height={trackHeight}>
      <Stage width={pixelPeaks.length / DPR} height={trackHeight / DPR} options={{transparent: true}}>
        {pixelPeaks.map((peak, i) => <Bar color={0xffffff} height={peak / 255 * trackHeight} x={i} y={trackHeight / 2 / DPR} key={i}/>)}
      </Stage>
    </Waveform>
  );
}

export default WaveformV4;
