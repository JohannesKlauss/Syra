import React, { useCallback, useContext } from 'react';
import { BaseContainer, RegionFirstLoop } from './AudioRegion.styled';
import { RegionContext } from '../../../../providers/RegionContext';
import { regionStore } from '../../../../recoil/regionStore';
import { useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil/dist';
import useRegionColor from '../../../../hooks/ui/region/useRegionColor';
import TrimStartHandle from './Manipulations/TrimStartHandle';
import useAudioRegionManipulation from '../../../../hooks/ui/region/useAudioRegionManipulation';
import TrimEndHandle from './Manipulations/TrimEndHandle';
import useDeltaXTracker from '../../../../hooks/ui/region/useDeltaXTracker';
import usePixelToSeconds from '../../../../hooks/ui/usePixelToSeconds';
import WindowedWaveform from '../../Waveform/WindowedWaveform';
import { determineTextColor } from '../../../../utils/color';
import useRegionWidth from '../../../../hooks/ui/region/useRegionWidth';
import { arrangeWindowStore } from '../../../../recoil/arrangeWindowStore';
import { useHotkeys } from 'react-hotkeys-hook';
import useRegionSplinterRecordingSync from '../../../../hooks/ui/region/useRegionSplinterRecordingSync';
import useRegionScheduler from '../../../../hooks/audio/useRegionScheduler';

function AudioRegion() {
  const pixelToSeconds = usePixelToSeconds();
  const regionId = useContext(RegionContext);
  const [isMuted, setIsMuted] = useRecoilState(regionStore.isMuted(regionId));
  const buffer = useRecoilValue(regionStore.audioBuffer(regionId));
  const trimStart = useRecoilValue(regionStore.trimStart(regionId));
  const setStart = useSetRecoilState(regionStore.start(regionId));
  const color = useRegionColor(false);
  const completeWidth = useRegionWidth();
  const trackHeight = useRecoilValue(arrangeWindowStore.trackHeight);

  const { left, width, paddingLeft, onChangeTrimStart, onChangeTrimEnd, onChangeMove, onMouseUp } = useAudioRegionManipulation();

  const onMoveEnd = useCallback((deltaX: number) => {
    onMouseUp();
    setStart(currVal => {
      let newVal = currVal + pixelToSeconds(deltaX);

      if (newVal + trimStart < 0) {
        newVal = -trimStart;
      }

      return newVal;
    });
  }, [setStart, onMouseUp, pixelToSeconds, trimStart]);

  const onMouseDown = useDeltaXTracker(onChangeMove, onMoveEnd);

  const ref = useHotkeys('ctrl+m', () => setIsMuted(currVal => !currVal));

  useRegionSplinterRecordingSync();
  useRegionScheduler();

  return (
    <BaseContainer isMuted={isMuted} left={left} onMouseDown={onMouseDown} innerRef={ref}>
      <RegionFirstLoop width={width} color={color}>
        <WindowedWaveform paddingLeft={paddingLeft} completeWidth={completeWidth - 4} color={determineTextColor(color)}
                          smoothing={2} buffer={buffer?.get()} height={trackHeight} offset={left}/>
        <TrimStartHandle onChange={onChangeTrimStart} onMouseUp={onMouseUp}/>
        <TrimEndHandle onChange={onChangeTrimEnd} onMouseUp={onMouseUp}/>
      </RegionFirstLoop>
    </BaseContainer>
  );
}

AudioRegion.whyDidYouRender = true;

export default React.memo(AudioRegion);
