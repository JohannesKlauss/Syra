import React from 'react';
import { useRecoilValue } from 'recoil';
import { arrangeWindowStore } from '../../../../recoil/arrangeWindowStore';
import { transportStore } from '../../../../recoil/transportStore';
import { BaseContainer, CycleBar, CycleEndHandle, CycleStartHandle } from './RulerCycle.styled';
import useMoveCycleBar from '../../../../hooks/ui/cycle/useMoveCycleBar';
import useMoveCycleStart from '../../../../hooks/ui/cycle/useMoveCycleStart';
import useMoveCycleEnd from '../../../../hooks/ui/cycle/useMoveCycleEnd';
import useQuarterToPixel from '../../../../hooks/ui/useQuarterToPixel';

function RulerCycle() {
  const windowWidth = useRecoilValue(arrangeWindowStore.width);
  const cycleStart = useRecoilValue(transportStore.cycleStart);
  const cycleEnd = useRecoilValue(transportStore.cycleEnd);
  const isCycleActive = useRecoilValue(transportStore.isCycleActive);
  const quarterToPixel = useQuarterToPixel();

  const { onMouseDown, translateX } = useMoveCycleBar();
  const { onMouseDown: onMouseDownCycleStart, translateX: startTranslateX, isActive: isStartHandleActive } = useMoveCycleStart();
  const { onMouseDown: onMouseDownCycleEnd, translateX: endTranslateX, isActive: isEndHandleActive } = useMoveCycleEnd();

  let cycleWidth = 0;

  if (!isStartHandleActive && !isEndHandleActive) {
    cycleWidth = quarterToPixel(cycleEnd) - quarterToPixel(cycleStart);
  }
  else if(isStartHandleActive) {
    cycleWidth = quarterToPixel(cycleEnd) - startTranslateX;
  }
  else if(isEndHandleActive) {
    cycleWidth = endTranslateX - translateX;
  }

  return (
    <BaseContainer windowWidth={windowWidth}>
      <CycleBar isCycleActive={isCycleActive} cycleStartTranslateX={isStartHandleActive ? startTranslateX : translateX}
                cycleWidth={cycleWidth} onMouseDown={onMouseDown}>

        <CycleStartHandle isCycleActive={isCycleActive} onMouseDown={onMouseDownCycleStart}/>
        <CycleEndHandle isCycleActive={isCycleActive} onMouseDown={onMouseDownCycleEnd}/>
      </CycleBar>
    </BaseContainer>
  );
}

export default RulerCycle;
