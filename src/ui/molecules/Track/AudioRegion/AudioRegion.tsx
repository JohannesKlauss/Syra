import React, { useContext, useState } from 'react';
import { BaseContainer } from './AudioRegion.styled';
import { RegionContext } from '../../../../providers/RegionContext';
import { regionStore } from '../../../../recoil/regionStore';
import { useRecoilState, useRecoilValue } from 'recoil/dist';
import { useHotkeys, useIsHotkeyPressed } from 'react-hotkeys-hook';
import useRegionDawRecordingSync from '../../../../hooks/ui/region/useRegionDawRecordingSync';
import useRegionScheduler from '../../../../hooks/audio/useRegionScheduler';
import ClonedAudioRegion from './ClonedAudioRegion';
import ManipulationContainer from './Manipulations/ManipulationContainer';
import useSecondsToPixel from '../../../../hooks/ui/useSecondsToPixel';

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
  const [isMuted, setIsMuted] = useRecoilState(regionStore.isMuted(regionId));
  const trimStart = useRecoilValue(regionStore.trimStart(regionId));
  const start = useRecoilValue(regionStore.start(regionId));
  const secondsToPixel = useSecondsToPixel();
  const isPressed = useIsHotkeyPressed();
  const [left, setLeft] = useState(secondsToPixel(trimStart + start));
  const [isMoving, setIsMoving] = useState(false);

  const hotkeysRef = useHotkeys('ctrl+m', () => setIsMuted(currVal => !currVal));

  useRegionDawRecordingSync();
  useRegionScheduler();

  const isDuplicating = isPressed('alt') && isMoving;

  return (
    <>
      {isDuplicating && <ClonedAudioRegion/>}
      <BaseContainer isMuted={isMuted} left={left} innerRef={hotkeysRef} isMoving={isMoving} tabIndex={-1}>
        <ManipulationContainer onUpdateLeftOffset={left => setLeft(left)} onChangeIsMoving={isMoving => setIsMoving(isMoving)}/>
      </BaseContainer>
    </>
  );
}

AudioRegion.whyDidYouRender = true;

export default React.memo(AudioRegion);
