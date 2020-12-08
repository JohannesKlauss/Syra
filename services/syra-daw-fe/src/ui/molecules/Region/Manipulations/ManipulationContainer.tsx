import React, { useEffect, useLayoutEffect } from 'react';
import TrimStartHandle from './TrimStartHandle';
import TrimEndHandle from './TrimEndHandle';
import { Manipulations, RegionFirstLoop } from '../AudioRegion/AudioRegion.styled';
import useRegionColor from '../../../../hooks/ui/region/useRegionColor';
import useMove from '../../../../hooks/ui/region/manipulations/useMove';
import useTrimStart from '../../../../hooks/ui/region/manipulations/useTrimStart';
import useTrimEnd from '../../../../hooks/ui/region/manipulations/useTrimEnd';

interface Props {
  onChangeIsMoving: (isMoving: boolean) => void;
  onUpdateLeftOffset: (pos: number) => void;
  onUpdateTopOffset: (pos: number) => void;
}

const ManipulationContainer: React.FC<Props> = ({
  onChangeIsMoving,
  onUpdateLeftOffset,
  onUpdateTopOffset,
  children,
}) => {
  const color = useRegionColor(false);
  const { triggerMove, deltaXMove, isMoving, cssTop } = useMove();
  const { triggerTrimStart, deltaXTrimStart } = useTrimStart();
  const { triggerTrimEnd, deltaXTrimEnd } = useTrimEnd();

  useEffect(() => {
    onChangeIsMoving(isMoving);
  }, [isMoving, onChangeIsMoving]);

  useLayoutEffect(() => {
    onUpdateLeftOffset(deltaXMove + deltaXTrimStart);
  }, [deltaXMove, deltaXTrimStart, onUpdateLeftOffset]);

  useLayoutEffect(() => {
    onUpdateTopOffset(cssTop);
  }, [cssTop, onUpdateTopOffset]);

  return (
    <RegionFirstLoop color={color} width={deltaXTrimEnd - deltaXTrimStart}>
      {children}
      <Manipulations onMouseDown={triggerMove} isMoving={isMoving}>
        <TrimStartHandle trigger={triggerTrimStart} />
        <TrimEndHandle trigger={triggerTrimEnd} />
      </Manipulations>
    </RegionFirstLoop>
  );
};

export default ManipulationContainer;
