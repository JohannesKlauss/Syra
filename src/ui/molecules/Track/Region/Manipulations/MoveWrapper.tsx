import React, { useContext, useEffect } from 'react';
import { styled } from '@material-ui/core';
import useMoveRegion from '../../../../../hooks/ui/region/useMoveRegion';
import RegionPreview from '../RegionPreview';
import { useRecoilValue } from 'recoil/dist';
import { RegionContext } from '../../../../../providers/RegionContext';
import { regionStore } from '../../../../../recoil/regionStore';
import useSecondsToPixel from '../../../../../hooks/ui/useSecondsToPixel';
import { TrackRefContext } from '../../../../../providers/TrackContext';
import ReactDOM from 'react-dom';
import useTrimmedRegionWidth from '../../../../../hooks/ui/region/useTrimmedRegionWidth';

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
  const trackRef = useContext(TrackRefContext);
  const {onMouseDown, translateX, showPreview} = useMoveRegion();
  const regionId = useContext(RegionContext);
  const start = useRecoilValue(regionStore.start(regionId));
  const trimStart = useRecoilValue(regionStore.trimStart(regionId));
  const secondsToPixel = useSecondsToPixel();
  const trimmedRegionWith = useTrimmedRegionWidth();

  useEffect(() => {
    showPreview ? onManipulateStart() : onManipulateEnd();
  }, [showPreview, onManipulateEnd, onManipulateStart]);

  return (
    <Wrapper onMouseDown={onMouseDown}>
      {showPreview && trackRef?.current && ReactDOM.createPortal(
        <RegionPreview width={trimmedRegionWith} translateX={translateX + secondsToPixel(start + trimStart)} offsetX={-secondsToPixel(trimStart)}/>,
        trackRef.current
      )}
      {children}
    </Wrapper>
  );
});

export default MoveWrapper;
