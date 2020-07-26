import React, { useEffect } from 'react';
import { styled } from '@material-ui/core';
import RegionPreview from './RegionPreview';
import useTrimRegionEnd from '../../../hooks/ui/region/useTrimRegionEnd';
import useTrimRegionStart from '../../../hooks/ui/region/useTrimRegionStart';

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
  onManipulateStart: () => void;
  onManipulateEnd: () => void;
}

function TrimWrapper({onManipulateStart, onManipulateEnd}: Props) {
  const {onMouseDown: onMouseDownEndHandle, showPreview: showPreviewForEnd, width: endWidth} = useTrimRegionEnd();
  const {onMouseDown: onMouseDownStartHandle, showPreview: showPreviewForStart, width: startWidth, translateX} = useTrimRegionStart();


  useEffect(() => {
    showPreviewForEnd || showPreviewForStart ? onManipulateStart() : onManipulateEnd();
  }, [showPreviewForEnd, showPreviewForStart, onManipulateEnd, onManipulateStart]);

  return (
    <>
      {showPreviewForStart && <RegionPreview translateX={translateX} width={startWidth}/>}
      {showPreviewForEnd && <RegionPreview translateX={0} width={endWidth}/>}
      <TrimStartHandle onMouseDown={onMouseDownStartHandle}/>
      <TrimEndHandle onMouseDown={onMouseDownEndHandle}/>
    </>
  );
}

export default TrimWrapper;
