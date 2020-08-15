import React, { useContext, useState } from 'react';
import { BaseContainer, RegionName } from './AudioRegion.styled';
import { RegionContext } from '../../../../providers/RegionContext';
import { regionStore } from '../../../../recoil/regionStore';
import { useRecoilValue } from 'recoil/dist';
import { useIsHotkeyPressed } from 'react-hotkeys-hook';
import useRegionDawRecordingSync from '../../../../hooks/ui/region/useRegionDawRecordingSync';
import useRegionScheduler from '../../../../hooks/audio/useRegionScheduler';
import ClonedAudioRegion from './ClonedAudioRegion';
import ManipulationContainer from './Manipulations/ManipulationContainer';
import useSecondsToPixel from '../../../../hooks/ui/useSecondsToPixel';
import { determineTextColor } from '../../../../utils/color';
import useRegionColor from '../../../../hooks/ui/region/useRegionColor';

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
  const secondsToPixel = useSecondsToPixel();
  const isPressed = useIsHotkeyPressed();
  const color = useRegionColor(false);
  const [left, setLeft] = useState(secondsToPixel(trimStart + start));
  const [isMoving, setIsMoving] = useState(false);

  useRegionDawRecordingSync();
  useRegionScheduler();

  const isDuplicating = isPressed('alt') && isMoving;

  return (
    <>
      {isDuplicating && <ClonedAudioRegion/>}
      <BaseContainer isMuted={isMuted} left={left} isMoving={isMoving} isSelected={isSelected} color={color}>
        <RegionName variant={'overline'} color={determineTextColor(color)}>{name}</RegionName>
        <ManipulationContainer onUpdateLeftOffset={left => setLeft(left)} onChangeIsMoving={isMoving => setIsMoving(isMoving)}/>
      </BaseContainer>
    </>
  );
}

AudioRegion.whyDidYouRender = true;

export default React.memo(AudioRegion);
