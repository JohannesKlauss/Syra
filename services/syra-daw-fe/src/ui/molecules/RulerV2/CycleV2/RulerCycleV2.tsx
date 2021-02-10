import React, { useCallback, useContext } from 'react';
import { useRecoilState, useRecoilValue } from 'recoil';
import { transportStore } from '../../../../recoil/transportStore';
import ResizableBox from '../../../atoms/ResizableBox';
import { gridStore } from '../../../../recoil/gridStore';
import { ViewContext } from '../../../../providers/ViewContext';
import { Box } from '@chakra-ui/react';
import usePixelToTicks from '../../../../hooks/tone/usePixelToTicks';
import useTicksToPixel from '../../../../hooks/tone/useTicksToPixel';
import * as Tone from 'tone';

const RulerCycleV2: React.FC = () => {
  const { view } = useContext(ViewContext);
  const totalWidth = useRecoilValue(gridStore.totalWidth(view));
  const [cycleStart, setCycleStart] = useRecoilState(transportStore.cycleStart);
  const [cycleEnd, setCycleEnd] = useRecoilState(transportStore.cycleEnd);
  const [isCycleActive, setIsCycleActive] = useRecoilState(transportStore.isCycleActive);
  const pixelToTicks = usePixelToTicks();
  const ticksToPixel = useTicksToPixel();

  const onPositionChanged = useCallback((start: number, duration: number) => {
    const startInSeconds = Tone.Ticks(pixelToTicks(start)).toSeconds();

    setCycleStart(startInSeconds);
    setCycleEnd(Tone.Ticks(pixelToTicks(duration)).toSeconds() + startInSeconds);
  }, [setCycleEnd, setCycleStart, pixelToTicks]);

  return (
    <Box pos={'relative'} w={`${totalWidth}px`} h={'20px'}>
      <ResizableBox
        onPositionChanged={onPositionChanged}
        onClick={() => setIsCycleActive(currVal => !currVal)}
        baseWidth={ticksToPixel(Tone.Ticks(cycleEnd - cycleStart, 's').toTicks())}
        baseX={ticksToPixel(Tone.Ticks(cycleStart, 's').toTicks())}
        cursor={'move'}
        h={'20px'}
        bg={'yellow.500'}
        opacity={isCycleActive ? 0.7 : 0.3}
      />
    </Box>
  );
};

export default RulerCycleV2;
