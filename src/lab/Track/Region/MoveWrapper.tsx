import React, { useContext } from 'react';
import { styled } from '@material-ui/core';
import useMoveRegion from '../../../hooks/ui/useMoveRegion';
import useDuplicateRegion from '../../../hooks/recoil/region/useDuplicateRegion';
import { RegionContext } from '../../../providers/RegionContext';

const Wrapper = styled('div')({
  width: '100%',
  height: '100%',
  cursor: 'ew-resize',
  position: 'absolute',
  left: 0,
  top: 0,
});

interface Props {
  isSelected: boolean;
}

const MoveWrapper: React.FC<Props> = React.memo(({ isSelected, children }) => {
  const {onMouseUpLeave, onMouseMove, onMouseDown} = useMoveRegion(isSelected);

  return (
    <Wrapper onMouseDown={onMouseDown} onMouseUp={onMouseUpLeave} onMouseLeave={onMouseUpLeave} onMouseMove={onMouseMove}>
      {children}
    </Wrapper>
  );
});

export default MoveWrapper;
