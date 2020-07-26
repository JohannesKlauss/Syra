import React, { useEffect } from 'react';
import { styled } from '@material-ui/core';
import useMoveRegion from '../../../hooks/ui/region/useMoveRegion';
import RegionPreview from './RegionPreview';

const Wrapper = styled('div')({
  width: '100%',
  height: '100%',
  cursor: 'move',
  position: 'absolute',
  left: 0,
  top: 0,
});

interface Props {
  onManipulateStart: () => void;
  onManipulateEnd: () => void;
}

const MoveWrapper: React.FC<Props> = React.memo(({ children, onManipulateEnd, onManipulateStart }) => {
  const {onMouseDown, translateX, showPreview} = useMoveRegion();

  useEffect(() => {
    showPreview ? onManipulateStart() : onManipulateEnd();
  }, [showPreview, onManipulateEnd, onManipulateStart]);

  return (
    <Wrapper onMouseDown={onMouseDown}>
      {showPreview && <RegionPreview translateX={translateX}/>}
      {children}
    </Wrapper>
  );
});

export default MoveWrapper;
