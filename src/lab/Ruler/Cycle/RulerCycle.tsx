import React, { useCallback, useEffect, useRef, useState } from 'react';
import { useRecoilState, useRecoilValue } from 'recoil/dist';
import { arrangeWindowStore } from '../../../recoil/arrangeWindowStore';
import { transportStore } from '../../../recoil/transportStore';
import { BaseContainer, CycleBar, CycleEndHandle, CycleStartHandle } from './RulerCycle.styled';
import { init } from '@graphql-codegen/cli';

function RulerCycle() {
  const windowWidth = useRecoilValue(arrangeWindowStore.width);
  const [cycleStart, setCycleStart] = useRecoilState(transportStore.cycleStart);
  const [cycleEnd, setCycleEnd] = useRecoilState(transportStore.cycleEnd);
  const [isCycleActive, setIsCycleActive] = useRecoilState(transportStore.isCycleActive);
  const snapWidth = useRecoilValue(arrangeWindowStore.snapValueWidthInPixels);
  const snapValue = useRecoilValue(arrangeWindowStore.snapValue);
  const isSnapActive = useRecoilValue(arrangeWindowStore.isSnapActive);
  const pixelPerSecond = useRecoilValue(arrangeWindowStore.pixelPerSecond);
  const [isDragging, setIsDragging] = useState(false);
  const [translateX, setTranslateX] = useState(pixelPerSecond * cycleStart);
  const [cycleWidth, setCycleWidth] = useState(pixelPerSecond * cycleEnd - translateX);
  const initialValues = useRef({ x: 0, offsetStart: 0, offsetEnd: 0 });

  useEffect(() => {
    initialValues.current.offsetStart = pixelPerSecond * cycleStart;
    initialValues.current.offsetEnd = pixelPerSecond * cycleEnd;
  }, [pixelPerSecond, cycleStart, cycleEnd]);

  const onMouseDown = useCallback(e => {
    e.stopPropagation();

    setIsDragging(true);

    initialValues.current.x = e.clientX;
  }, [setIsDragging, setIsCycleActive, initialValues]);

  const onMouseUp = useCallback(() => {
    setIsDragging(false);

    setCycleStart(translateX / pixelPerSecond);
    setCycleEnd((translateX + cycleWidth) / pixelPerSecond);
  }, [setIsDragging, translateX, setIsCycleActive, setCycleEnd]);

  const onMouseMoveBar = useCallback(e => {
    if (!isDragging) {
      return;
    }

    const inverse = 1 / (snapWidth / 4); // Make the cycle snap value a quarter of the set snap.

    let x = initialValues.current.offsetStart + e.clientX - initialValues.current.x;

    if (x < 1) {
      x = 1;
    }

    const snappedPos = isSnapActive ? Math.round(x * inverse) / inverse : x;

    setTranslateX(snappedPos);
  }, [isDragging, snapWidth, snapValue, setTranslateX, isSnapActive]);

  /*const onMouseMoveStartHandle = useCallback(e => {
    if (!isDragging) {
      return;
    }

    const inverse = 1 / (snapWidth / 4); // Make the cycle snap value a quarter of the set snap.

    let x = initialValues.current.offset + e.clientX - initialValues.current.x;

    if (x < 1) {
      x = 1;
    }

    const snappedPos = isSnapActive ? Math.round(x * inverse) / inverse : x;

    setCycleWidth(pixelPerSecond * cycleEnd - translateX + (translateX - snappedPos))
    setTranslateX(snappedPos);
  }, [translateX, setTranslateX, snapWidth, snapValue, isDragging, isSnapActive]);*/

  const onMouseMoveEndHandle = useCallback(e => {
    if (!isDragging) {
      return;
    }

    const inverse = 1 / (snapWidth / 4); // Make the cycle snap value a quarter of the set snap.

    let x = initialValues.current.offsetEnd + e.clientX - initialValues.current.x;

    if (x < 1) {
      x = 1;
    } else if (x < translateX) {
      // End Handle is becoming the start handle.
    }

    console.log('x', x);

    const snappedPos = isSnapActive ? Math.round(x * inverse) / inverse : x;

    setCycleWidth(snappedPos - translateX);
  }, [translateX, isDragging, snapWidth, initialValues, isSnapActive, setCycleWidth]);

  return (
    <BaseContainer windowWidth={windowWidth} onMouseMove={onMouseMoveBar}>
      <CycleBar isCycleActive={isCycleActive} onClick={() => setIsCycleActive(currVal => !currVal)}
                cycleStartTranslateX={translateX} cycleWidth={cycleWidth}
                onMouseDown={onMouseDown} onMouseUp={onMouseUp}>

        <CycleStartHandle isCycleActive={isCycleActive} onMouseDown={onMouseDown} onMouseUp={onMouseUp}/>

        <CycleEndHandle isCycleActive={isCycleActive} onMouseDown={onMouseDown} onMouseUp={onMouseUp}
                        onMouseMove={onMouseMoveEndHandle}/>

      </CycleBar>
    </BaseContainer>
  );
}

export default RulerCycle;
