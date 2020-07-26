import React, { useEffect } from 'react';
import { styled } from '@material-ui/core';
import RegionPreview from './RegionPreview';
import useTrimRegionEnd from '../../../hooks/ui/region/useTrimRegionEnd';
import useTrimRegionStart from '../../../hooks/ui/region/useTrimRegionStart';
import { RegionManipulation } from '../../../types/RegionManipulation';

const TrimStartHandle = styled('div')({
  position: 'absolute',
  width: 5,
  height: '100%',
  top: 0,
  left: 0,
  cursor: 'e-resize',
});

const TrimEndHandle = styled('div')({
  position: 'absolute',
  width: 5,
  height: '100%',
  top: 0,
  right: 0,
  cursor: 'w-resize',
});

interface Props {
  onManipulateStart: (type: RegionManipulation) => void;
  onManipulateEnd: (type: RegionManipulation) => void;
}

function TrimWrapper({onManipulateStart, onManipulateEnd}: Props) {
  const {onMouseDown: onMouseDownEndHandle, showPreview: showPreviewForEnd, width: endWidth} = useTrimRegionEnd();
  const {onMouseDown: onMouseDownStartHandle, showPreview: showPreviewForStart, width: startWidth, translateX} = useTrimRegionStart();

  useEffect(() => {
    showPreviewForEnd ? onManipulateStart(RegionManipulation.TRIM_END) : onManipulateEnd(RegionManipulation.TRIM_END);
    showPreviewForStart ? onManipulateStart(RegionManipulation.TRIM_START) : onManipulateEnd(RegionManipulation.TRIM_START);
  }, [showPreviewForEnd, showPreviewForStart, onManipulateEnd, onManipulateStart]);

  return (
    <>
      {showPreviewForStart && <RegionPreview translateX={translateX} width={startWidth} offsetX={-translateX}/>}
      {showPreviewForEnd && <RegionPreview translateX={0} width={endWidth} offsetX={-translateX}/>}
      <TrimStartHandle onMouseDown={onMouseDownStartHandle}/>
      <TrimEndHandle onMouseDown={onMouseDownEndHandle}/>
    </>
  );
}

export default TrimWrapper;
