import React, { useCallback, useContext } from 'react';
import ArrowRightAltIcon from '@material-ui/icons/ArrowRightAlt';
import { styled } from '@material-ui/core';
import useDeltaXTracker from '../../../../../hooks/ui/region/useDeltaXTracker';
import { useRecoilValue, useSetRecoilState } from 'recoil/dist';
import { regionStore } from '../../../../../recoil/regionStore';
import { RegionContext } from '../../../../../providers/RegionContext';
import usePixelToSeconds from '../../../../../hooks/ui/usePixelToSeconds';

const BaseContainer = styled('div')({
  position: 'absolute',
  bottom: 5,
  left: 5,
  cursor: 'e-resize',
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
});

interface Props {
  onChange: (deltaX: number) => void;
  onMouseUp: () => void;
}

const TrimStartHandle: React.FC<Props> = ({onChange, onMouseUp}: Props) => {
  const pixelToSeconds = usePixelToSeconds();
  const regionId = useContext(RegionContext);
  const start = useRecoilValue(regionStore.start(regionId));
  const setTrimStart = useSetRecoilState(regionStore.trimStart(regionId));

  const onUpdateState = useCallback((deltaX: number) => {
    setTrimStart(currVal => {
      const newVal = Math.max(currVal + pixelToSeconds(deltaX), 0);

      return newVal + start < 0 ? -start : newVal;
    });
    onMouseUp();
  }, [setTrimStart, onMouseUp, pixelToSeconds, start]);

  const onMouseDown = useDeltaXTracker(onChange, onUpdateState);

  return (
    <BaseContainer onMouseDown={onMouseDown}>
      <CustomArrowRightAltIcon/>
    </BaseContainer>
  );
};

export default React.memo(TrimStartHandle);
