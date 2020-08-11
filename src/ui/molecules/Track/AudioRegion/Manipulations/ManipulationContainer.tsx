import React, { useCallback, useContext, useEffect, useLayoutEffect, useState } from 'react';
import WindowedWaveform from '../../../Waveform/WindowedWaveform';
import { determineTextColor } from '../../../../../utils/color';
import TrimStartHandle from './TrimStartHandle';
import TrimEndHandle from './TrimEndHandle';
import { Manipulations, RegionFirstLoop } from '../AudioRegion.styled';
import usePixelToSeconds from '../../../../../hooks/ui/usePixelToSeconds';
import { RegionContext } from '../../../../../providers/RegionContext';
import { useRecoilValue, useSetRecoilState } from 'recoil/dist';
import { regionStore } from '../../../../../recoil/regionStore';
import { arrangeWindowStore } from '../../../../../recoil/arrangeWindowStore';
import useRegionColor from '../../../../../hooks/ui/region/useRegionColor';
import useRegionWidth from '../../../../../hooks/ui/region/useRegionWidth';
import { useIsHotkeyPressed } from 'react-hotkeys-hook';
import useDuplicateRegion from '../../../../../hooks/recoil/region/useDuplicateRegion';
import useCutRegion from '../../../../../hooks/recoil/region/useCutRegion';
import useAudioRegionManipulation from '../../../../../hooks/ui/region/useAudioRegionManipulation';
import useDeltaXTracker from '../../../../../hooks/ui/region/useDeltaXTracker';
import { EditMode } from '../../../../../types/RegionManipulation';

interface Props {
  onChangeIsMoving: (isMoving: boolean) => void;
  onUpdateLeftOffset: (pos: number) => void;
}

function ManipulationContainer({ onChangeIsMoving, onUpdateLeftOffset }: Props) {
  const pixelToSeconds = usePixelToSeconds();
  const regionId = useContext(RegionContext);
  const buffer = useRecoilValue(regionStore.audioBuffer(regionId));
  const bufferId = useRecoilValue(regionStore.audioBufferPointer(regionId));
  const trimStart = useRecoilValue(regionStore.trimStart(regionId));
  const setStart = useSetRecoilState(regionStore.start(regionId));
  const waveformSmoothing = useRecoilValue(arrangeWindowStore.waveformSmoothing);
  const editMode = useRecoilValue(arrangeWindowStore.editMode);
  const color = useRegionColor(false);
  const completeWidth = useRegionWidth();
  const trackHeight = useRecoilValue(arrangeWindowStore.trackHeight);
  const isPressed = useIsHotkeyPressed();
  const [isMoving, setIsMoving] = useState(false);
  const duplicateRegion = useDuplicateRegion();
  const cutRegion = useCutRegion();

  const { left, width, paddingLeft, onChangeTrimStart, onChangeTrimEnd, onChangeMove, onMouseUp } = useAudioRegionManipulation();

  useEffect(() => {
    onChangeIsMoving(isMoving);
  }, [isMoving, onChangeIsMoving]);

  useLayoutEffect(() => {
    onUpdateLeftOffset(left);
  }, [left, onUpdateLeftOffset]);

  const onMoveEnd = useCallback((deltaX: number) => {
    setIsMoving(false);

    if (isPressed('alt')) {
      duplicateRegion(regionId);
    }

    onMouseUp();
    setStart(currVal => {
      let newVal = currVal + pixelToSeconds(deltaX);

      if (newVal + trimStart < 0) {
        newVal = -trimStart;
      }

      return newVal;
    });
  }, [setStart, onMouseUp, pixelToSeconds, trimStart, setIsMoving, duplicateRegion, isPressed, regionId]);

  const deltaXTracker = useDeltaXTracker(onChangeMove, onMoveEnd);

  const onMoveStart = useCallback((e) => {
    if (editMode === EditMode.DEFAULT) {
      deltaXTracker(e);
      setIsMoving(true);
    }
  }, [deltaXTracker, setIsMoving, editMode]);

  const onClick = useCallback((e) => {
    if (editMode === EditMode.CUT) {
      cutRegion(regionId, pixelToSeconds(e.clientX - e.target.getBoundingClientRect().left));
    }
  }, [editMode, cutRegion, pixelToSeconds, regionId]);

  return (
    <RegionFirstLoop width={width} color={color}>
      <WindowedWaveform paddingLeft={paddingLeft} completeWidth={completeWidth} color={determineTextColor(color)}
                        smoothing={waveformSmoothing} buffer={buffer} height={trackHeight} offset={left}
                        bufferId={bufferId}/>
      <Manipulations onMouseDown={onMoveStart} onClick={onClick}>
        <TrimStartHandle onChange={onChangeTrimStart} onMouseUp={onMouseUp}/>
        <TrimEndHandle onChange={onChangeTrimEnd} onMouseUp={onMouseUp}/>
      </Manipulations>
    </RegionFirstLoop>
  );
}

export default ManipulationContainer;
