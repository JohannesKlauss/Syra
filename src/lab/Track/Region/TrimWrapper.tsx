import React, { useContext, useEffect } from 'react';
import { styled } from '@material-ui/core';
import RegionPreview from './RegionPreview';
import useTrimRegionEnd from '../../../hooks/ui/region/useTrimRegionEnd';
import { RegionContext } from '../../../providers/RegionContext';
import { regionStore } from '../../../recoil/regionStore';
import { useRecoilValue } from 'recoil/dist';
import { arrangeWindowStore } from '../../../recoil/arrangeWindowStore';

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
  const regionId = useContext(RegionContext);
  const start = useRecoilValue(regionStore.start(regionId));
  const pixelPerSecond = useRecoilValue(arrangeWindowStore.pixelPerSecond);
  const {onMouseDown: onMouseDownEndHandle, showPreview, width} = useTrimRegionEnd();

  useEffect(() => {
    showPreview ? onManipulateStart() : onManipulateEnd();
  }, [showPreview]);

  return (
    <>
      {showPreview && <RegionPreview translateX={start * pixelPerSecond} width={width}/>}
      <TrimStartHandle/>
      <TrimEndHandle onMouseDown={onMouseDownEndHandle}/>
    </>
  );
}

export default TrimWrapper;
