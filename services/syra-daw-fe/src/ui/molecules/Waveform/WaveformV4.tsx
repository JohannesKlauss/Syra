import React from 'react';
import { PixiComponent, Stage } from '@inlet/react-pixi';
import { Graphics } from 'pixi.js';
import { audioBufferStore } from '../../../recoil/audioBufferStore';
import { useRecoilValue } from 'recoil';
import { arrangeWindowStore } from '../../../recoil/arrangeWindowStore';
import { DPR } from '../../../const/ui';
import { Box } from '@chakra-ui/react';

const WaveformHalf = PixiComponent<{ peaks: number[], trackHeight: number, color: number, smoothing: number, inverse?: boolean }, Graphics>('Rectangle', {
  create: () => new Graphics(),
  applyProps: (instance, oldProps, props) => {
    const { peaks, trackHeight, color, smoothing, inverse } = props;

    const points = [0, trackHeight / 2];

    if (trackHeight !== oldProps.trackHeight) {
      for (let i = 0; i < peaks.length; i += smoothing) {
        points.push(i + 1);
        points.push(peaks[i] * (trackHeight / 2) + (trackHeight / 2));
      }

      points.push(peaks.length + 1);
      points.push(trackHeight / 2);

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

function WaveformV4({ bufferId }: Props) {
  const trackHeight = useRecoilValue(arrangeWindowStore.trackHeight);

  return (
    <Box h={`${trackHeight}px`} w={'100%'} pos={'absolute'} top={0} left={0}>
      <Stage width={0} height={trackHeight / DPR}
             options={{ transparent: true, antialias: true, resolution: DPR }}>
        <WaveformHalf color={0xffffff} peaks={[]} smoothing={3} trackHeight={trackHeight / DPR}/>
      </Stage>
    </Box>
  );
}

export default WaveformV4;
