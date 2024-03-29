import React, { useCallback, useContext, useState } from "react";
import { useRecoilState, useRecoilValue } from 'recoil';
import { transportStore } from '../../../../recoil/transportStore';
import ResizableBox from '../../../atoms/ResizableBox';
import { gridStore } from '../../../../recoil/gridStore';
import { ViewContext } from '../../../../providers/ViewContext';
import { Box } from '@chakra-ui/react';
import usePixelToTicks from '../../../../hooks/ui/usePixelToTicks';
import useTicksToPixel from '../../../../hooks/ui/useTicksToPixel';
import * as Tone from 'tone';

const RulerCycleV2: React.FC = () => {
  const { view } = useContext(ViewContext);
  const totalWidth = useRecoilValue(gridStore.totalWidth(view));
  const [cycleStart, setCycleStart] = useRecoilState(transportStore.cycleStart);
  const [cycleEnd, setCycleEnd] = useRecoilState(transportStore.cycleEnd);
  const [isCycleActive, setIsCycleActive] = useRecoilState(transportStore.isCycleActive);
  const [isMoving, setIsMoving] = useState(false);
  const pixelToTicks = usePixelToTicks();
  const ticksToPixel = useTicksToPixel();

  const onPositionChanged = useCallback((start: number, duration: number) => {
    const startInSeconds = Tone.Ticks(pixelToTicks(start)).toSeconds();

    setCycleStart(startInSeconds);
    setCycleEnd(Tone.Ticks(pixelToTicks(duration)).toSeconds() + startInSeconds);
  }, [setCycleEnd, setCycleStart, pixelToTicks]);

  const onMouseUp = () => {
    if (!isMoving) {
      setIsCycleActive(currVal => !currVal);
    }

    setIsMoving(false);
  };

  return (
    <Box pos={'relative'} w={`${totalWidth}px`} h={'20px'}>
      <ResizableBox
        onPositionChanged={onPositionChanged}
        onMouseUp={onMouseUp}
        baseWidth={ticksToPixel(Tone.Ticks(cycleEnd - cycleStart, 's').toTicks())}
        baseX={ticksToPixel(Tone.Ticks(cycleStart, 's').toTicks())}
        onMotionDragStart={() => setIsMoving(true)}
        cursor={'move'}
        h={'20px'}
        bg={'yellow.500'}
        opacity={isCycleActive ? 0.7 : 0.3}
        snapToY={100000} // This is just to prevent dragging it along the way axis.
      />
    </Box>
  );
};

export default RulerCycleV2;
