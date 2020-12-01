import React from 'react';
import { PixiComponent, Stage } from '@inlet/react-pixi';
import { Graphics } from 'pixi.js';
import { audioBufferStore } from '../../../recoil/audioBufferStore';
import { useRecoilValue } from 'recoil';
import useDownsampleAudioBuffer from '../../../hooks/audio/useDownsampleAudioBuffer';
import { arrangeWindowStore } from '../../../recoil/arrangeWindowStore';
import { DPR } from '../../../const/ui';
import { Box } from '@chakra-ui/react';

const Bar = PixiComponent<{ x: number, y: number, height: number, color: number }, Graphics>('Rectangle', {
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

const WaveformHalf = PixiComponent<{ peaks: number[], trackHeight: number, color: number, smoothing: number, inverse?: boolean }, Graphics>('Rectangle', {
  create: () => new Graphics(),
  applyProps: (instance, oldProps, props) => {
    const { peaks, trackHeight, color, smoothing, inverse } = props;

    const points = [0, trackHeight / 2];
    const subtractFrom = inverse ? 255 : 0;

    if (trackHeight !== oldProps.trackHeight) {
      for (let i = 0; i < peaks.length; i += smoothing) {
        points.push(i + 1);
        points.push(peaks[i] * (trackHeight / 2) + (trackHeight / 2));
      }

      points.push(peaks.length + 1);
      points.push(trackHeight / 2);

      console.log(points);

      instance.clear();
      instance.beginFill(color);
      instance.drawPolygon(points);
      instance.endFill();
    }
  },
});

interface Props {
  bufferId: string;
  trimStart: number;
}

function WaveformV4({ bufferId, trimStart }: Props) {
  useDownsampleAudioBuffer(bufferId);

  const trackHeight = useRecoilValue(arrangeWindowStore.trackHeight);
  const pixelPeaks = useRecoilValue(audioBufferStore.pixelPeaks(bufferId));

  if (pixelPeaks.length === 0) {
    return null;
  }

  return (
    <Box h={`${trackHeight}px`} w={'100%'} pos={'absolute'} top={0} left={0}>
      <Stage width={pixelPeaks.length / DPR} height={trackHeight / DPR}
             options={{ transparent: true, antialias: true, resolution: DPR }}>
        <WaveformHalf color={0xffffff} peaks={pixelPeaks} smoothing={3} trackHeight={trackHeight / DPR}/>
      </Stage>
    </Box>
  );
}

export default WaveformV4;
