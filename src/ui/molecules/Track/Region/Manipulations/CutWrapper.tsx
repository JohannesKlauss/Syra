import React, { HTMLAttributes, useCallback, useContext, useEffect, useState } from 'react';
import { styled } from '@material-ui/core';
import usePixelToSeconds from '../../../../../hooks/ui/usePixelToSeconds';
import useSnapCtrlPixelCalc from '../../../../../hooks/ui/useSnapCtrlPixelCalc';
import useMovable from '../../../../../hooks/ui/useMovable';
import { RegionContext } from '../../../../../providers/RegionContext';
import useCutRegion from '../../../../../hooks/recoil/region/useCutRegion';
import { useIsHotkeyPressed } from 'react-hotkeys-hook';

interface CutIndicatorProps {
  translateX: number;
}

const CutIndicator = styled(
  ({ translateX, ...other }: CutIndicatorProps & Omit<HTMLAttributes<HTMLSpanElement>, keyof CutIndicatorProps>) => <span {...other} />,
)({
  zIndex: 12,
  width: 1,
  top: 0,
  position: 'fixed',
  height: 1200,
  display: 'inline-block',
  cursor: 'col-resize',
  willChange: 'transform',
  pointerEvents: 'none',
  transform: ({ translateX }: CutIndicatorProps) => `translateX(${translateX}px)`,
  '&:after': {
    backgroundColor: 'white',
    boxShadow: '0 0 4px 0 black',
    content: '""',
    display: 'inline-block',
    height: 1200,
    marginLeft: -2,
    width: 1,
  },
});

const Wrapper = styled('div')({
  width: '100%',
  height: '100%',
  cursor: 'text',
  position: 'absolute',
  left: 0,
  top: 0,
});

interface Props {
  onManipulateStart: () => void;
  onManipulateEnd: () => void;
}

function CutWrapper({ onManipulateStart, onManipulateEnd }: Props) {
  const regionId = useContext(RegionContext);
  const cutRegion = useCutRegion(regionId);
  const pixelToSeconds = usePixelToSeconds();
  const calcSnap = useSnapCtrlPixelCalc();
  const isPressed = useIsHotkeyPressed();
  const [x, setX] = useState(0);
  const [showPreview, setShowPreview] = useState(false);

  const onMouseUp = useCallback((e) => {
    e.preventDefault();

    setShowPreview(false);

    const cutAt = pixelToSeconds(calcSnap(e.clientX - e.target.getBoundingClientRect().left));

    cutRegion(cutAt);
  }, [setShowPreview, pixelToSeconds, calcSnap, cutRegion]);

  const onMouseMove = useCallback((e) => {
    setX(calcSnap(e.clientX - e.target.getBoundingClientRect().left));
  }, [setX, calcSnap]);

  const movableTrigger = useMovable(onMouseMove, onMouseUp);

  const onMouseDown = useCallback(() => {
    if (isPressed('ctrl')) {
      return;
    }

    setShowPreview(true);
    movableTrigger();
  }, [setShowPreview, movableTrigger, isPressed]);

  useEffect(() => {
    showPreview ? onManipulateStart() : onManipulateEnd();
  }, [showPreview, onManipulateEnd, onManipulateStart]);

  return (
    <Wrapper onMouseDown={onMouseDown}>
      {showPreview && <CutIndicator translateX={x}/>}
    </Wrapper>
  );
}

export default CutWrapper;
