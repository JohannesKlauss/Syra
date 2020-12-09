import React, { useContext, useEffect, useState } from 'react';
import { BaseContainer, RegionName, TopBar } from './AudioRegion.styled';
import { RegionContext } from '../../../../providers/RegionContext';
import { regionStore } from '../../../../recoil/regionStore';
import { useRecoilValue } from 'recoil';
import { useIsHotkeyPressed } from 'react-hotkeys-hook';
import useRegionDawRecordingSync from '../../../../hooks/ui/region/useRegionDawRecordingSync';
import useAudioRegionScheduler from '../../../../hooks/tone/useAudioRegionScheduler';
import ClonedAudioRegion from './ClonedAudioRegion';
import ManipulationContainer from '../Manipulations/ManipulationContainer';
import useRegionColor from '../../../../hooks/ui/region/useRegionColor';
import useAudioRegionSelfDestruct from '../../../../hooks/recoil/region/useAudioRegionSelfDestruct';
import useQuarterToPixel from '../../../../hooks/ui/useQuarterToPixel';

/**
 * The AudioRegion is built a bit complicated and unintuitive.
 *
 * The region is shown as a container with the channel color as background.
 * But the waveform is actually a canvas that scrolls with the arrange grid viewport and only shows that visible part
 * of the waveform to reduce the number of calculations and draw calls. So each region basically has a waveform
 * canvas that scrolls over the region like a magnifying glass and shows that respective part of that waveform.
 */
function AudioRegion() {
  const regionId = useContext(RegionContext);
  const isMuted = useRecoilValue(regionStore.isMuted(regionId));
  const isSelected = useRecoilValue(regionStore.isSelected(regionId));
  const name = useRecoilValue(regionStore.name(regionId));
  const trimStart = useRecoilValue(regionStore.trimStart(regionId));
  const start = useRecoilValue(regionStore.start(regionId));
  const quarterToPixel = useQuarterToPixel();
  const isPressed = useIsHotkeyPressed();
  const color = useRegionColor(false);
  const [left, setLeft] = useState(quarterToPixel(trimStart + start));
  const [top, setTop] = useState(0);
  const [isMoving, setIsMoving] = useState(false);

  useRegionDawRecordingSync();
  useAudioRegionScheduler();
  useAudioRegionSelfDestruct(regionId);

  useEffect(() => {
    if (!isMoving) {
      setTop(0);
    }
  }, [isMoving]);

  const isDuplicating = isPressed('alt') && isMoving;

  return (
    <>
      {isDuplicating && <ClonedAudioRegion/>}
      <BaseContainer isMuted={isMuted} left={left} isMoving={isMoving} isSelected={isSelected} color={color} top={top}>
        <ManipulationContainer onUpdateLeftOffset={left => setLeft(left)}
                               onChangeIsMoving={isMoving => setIsMoving(isMoving)}
                               onUpdateTopOffset={cssTop => setTop(cssTop)}/>
        <TopBar color={color}>
          <RegionName color={color}>{name}</RegionName>
        </TopBar>
      </BaseContainer>
    </>
  );
}

AudioRegion.whyDidYouRender = true;

export default React.memo(AudioRegion);