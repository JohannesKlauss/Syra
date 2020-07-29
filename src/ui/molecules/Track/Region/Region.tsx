import React, { useCallback, useContext, useState } from 'react';
import { RegionContext } from '../../../../providers/RegionContext';
import { useRecoilState, useRecoilValue } from 'recoil/dist';
import { regionStore } from '../../../../recoil/regionStore';
import useRegionScheduler from '../../../../hooks/audio/useRegionScheduler';
import { useHotkeys } from 'react-hotkeys-hook';
import useRegionWidth from '../../../../hooks/ui/region/useRegionWidth';
import useSecondsToPixel from '../../../../hooks/ui/useSecondsToPixel';
import MoveWrapper from './Manipulations/MoveWrapper';
import TrimWrapper from './Manipulations/TrimWrapper';
import useTrimmedRegionWidth from '../../../../hooks/ui/region/useTrimmedRegionWidth';
import useRegionColor from '../../../../hooks/ui/region/useRegionColor';
import useRegionSplinterRecordingSync from '../../../../hooks/ui/region/useRegionSplinterRecordingSync';
import { EditMode, RegionManipulation } from '../../../../types/RegionManipulation';
import { BaseContainer, Wrapper } from './Region.styled';
import { arrangeWindowStore } from '../../../../recoil/arrangeWindowStore';
import CutWrapper from './Manipulations/CutWrapper';
import SmoothWaveform from '../../Waveform/SmoothWaveform';

function Region() {
  const [isSelected, setIsSelected] = useState(false);
  const [isMoving, setIsMoving] = useState(false);
  const [isTrimmingStart, setIsTrimmingStart] = useState(false);
  const [isTrimmingEnd, setIsTrimmingEnd] = useState(false);
  const [isCutting, setIsCutting] = useState(false);

  const id = useContext(RegionContext);

  const editMode = useRecoilValue(arrangeWindowStore.editMode);
  const audioBuffer = useRecoilValue(regionStore.audioBuffer(id));
  const start = useRecoilValue(regionStore.start(id));
  const trimStart = useRecoilValue(regionStore.trimStart(id));
  const trimEnd = useRecoilValue(regionStore.trimEnd(id));
  const [isMuted, setIsMuted] = useRecoilState(regionStore.isMuted(id));

  const secondsToPixel = useSecondsToPixel();
  const regionWidth = useRegionWidth();
  const trimmedRegionWidth = useTrimmedRegionWidth();

  const isTrimming = isTrimmingEnd || isTrimmingStart;
  const isUnderManipulation = isMoving || isTrimming || isCutting;

  let translateX;
  let width;

  if (isTrimmingStart) {
    translateX = secondsToPixel(start);
    width = regionWidth - secondsToPixel(trimEnd);
  } else if (isTrimmingEnd) {
    translateX = secondsToPixel(start + trimStart);
    width = regionWidth - secondsToPixel(trimStart);
  } else {
    translateX = secondsToPixel(start + trimStart);
    width = trimmedRegionWidth;
  }

  const color = useRegionColor(isUnderManipulation);
  const ref = useHotkeys('ctrl+m', () => setIsMuted(currVal => !currVal));

  useRegionSplinterRecordingSync();
  useRegionScheduler();

  const setTrimming = useCallback((type: RegionManipulation, start: boolean) => {
    type === RegionManipulation.TRIM_START ? setIsTrimmingStart(start) : setIsTrimmingEnd(start);
  }, [setIsTrimmingEnd, setIsTrimmingStart]);

  return (
    <BaseContainer translateX={translateX} isSelected={isSelected} color={color}
                   width={width} isUnderManipulation={isTrimming}
                   onMouseDown={() => setIsSelected(true)} isMuted={isMuted} innerRef={ref} tabIndex={0}>
      <Wrapper>
        {editMode === EditMode.DEFAULT && (
          <>
            <MoveWrapper onManipulateStart={() => setIsMoving(true)}
                         onManipulateEnd={() => setIsMoving(false)}/>
            <TrimWrapper onManipulateStart={type => setTrimming(type, true)}
                         onManipulateEnd={type => setTrimming(type, false)}/>
          </>
        )}

        {editMode === EditMode.CUT && <CutWrapper onManipulateStart={() => setIsCutting(true)}
                                                  onManipulateEnd={() => setIsCutting(false)}/>}

        {audioBuffer && <SmoothWaveform buffer={audioBuffer.get()} height={68} width={regionWidth - 4}
                                        offsetX={-secondsToPixel(trimStart)} smoothing={2}/>}
      </Wrapper>
    </BaseContainer>
  );
}

export default Region;
