import React, { useEffect } from 'react';
import { styled } from '@material-ui/core';
import RegionPreview from './RegionPreview';
import useTrimRegionEnd from '../../../hooks/ui/region/useTrimRegionEnd';

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
  const {onMouseDown: onMouseDownEndHandle, showPreview, width} = useTrimRegionEnd();

  useEffect(() => {
    showPreview ? onManipulateStart() : onManipulateEnd();
  }, [showPreview, onManipulateEnd, onManipulateStart]);

  return (
    <>
      {showPreview && <RegionPreview translateX={0} width={width}/>}
      <TrimStartHandle/>
      <TrimEndHandle onMouseDown={onMouseDownEndHandle}/>
    </>
  );
}

export default TrimWrapper;
