import React, { useCallback, useState } from 'react';
import { styled } from '@material-ui/core';
import useMoveRegion from '../../../hooks/ui/useMoveRegion';
import RegionPreview from './RegionPreview';

const Wrapper = styled('div')({
  width: '100%',
  height: '100%',
  cursor: 'ew-resize',
  position: 'absolute',
  left: 0,
  top: 0,
});

const MoveWrapper: React.FC = React.memo(({ children }) => {
  const {onMouseDown, translateX, showPreview} = useMoveRegion();

  return (
    <Wrapper onMouseDown={onMouseDown}>
      {showPreview && <RegionPreview translateX={translateX}/>}
      {children}
    </Wrapper>
  );
});

export default MoveWrapper;
