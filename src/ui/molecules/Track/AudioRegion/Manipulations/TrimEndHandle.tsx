import React, { useCallback, useContext } from 'react';
import { styled } from '@material-ui/core';
import ArrowRightAltIcon from '@material-ui/icons/ArrowRightAlt';
import usePixelToSeconds from '../../../../../hooks/ui/usePixelToSeconds';
import { RegionContext } from '../../../../../providers/RegionContext';
import { useSetRecoilState } from 'recoil/dist';
import { regionStore } from '../../../../../recoil/regionStore';
import useDeltaXTracker from '../../../../../hooks/ui/region/useDeltaXTracker';

const BaseContainer = styled('div')({
  position: 'absolute',
  bottom: 5,
  right: 5,
  cursor: 'w-resize',
  width: 15,
  height: 15,
  borderRadius: 8,
  background: 'white',
  color: 'black',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
});

const CustomArrowRightAltIcon = styled(ArrowRightAltIcon)({
  width: 18,
  height: 18,
  transform: 'scaleX(-1)',
});

interface Props {
  onChange: (deltaX: number) => void;
  onMouseUp: () => void;
}

const TrimEndHandle: React.FC<Props> = ({onChange, onMouseUp}: Props) => {
  const pixelToSeconds = usePixelToSeconds();
  const regionId = useContext(RegionContext);
  const setTrimEnd = useSetRecoilState(regionStore.trimEnd(regionId));

  const onUpdateState = useCallback((deltaX: number) => {
    setTrimEnd(currVal => Math.max(currVal + pixelToSeconds(-deltaX), 0));
    onMouseUp();
  }, [setTrimEnd, onMouseUp, pixelToSeconds]);

  const onMouseDown = useDeltaXTracker(onChange, onUpdateState);

  return (
    <BaseContainer onMouseDown={onMouseDown}>
      <CustomArrowRightAltIcon/>
    </BaseContainer>
  );
};

export default React.memo(TrimEndHandle);
