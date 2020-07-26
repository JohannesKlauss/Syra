import React, { useCallback, useContext, useState } from 'react';
import { RegionContext } from '../../../providers/RegionContext';
import { useRecoilState, useRecoilValue } from 'recoil/dist';
import { regionStore } from '../../../recoil/regionStore';
import Waveform from '../../Waveform/Waveform';
import useRegionScheduler from '../../../hooks/audio/useRegionScheduler';
import { useHotkeys } from 'react-hotkeys-hook';
import useRegionWidth from '../../../hooks/ui/region/useRegionWidth';
import useSecondsToPixel from '../../../hooks/ui/useSecondsToPixel';
import MoveWrapper from './MoveWrapper';
import TrimWrapper from './TrimWrapper';
import useTrimmedRegionWidth from '../../../hooks/ui/region/useTrimmedRegionWidth';
import useRegionColor from '../../../hooks/ui/region/useRegionColor';
import useRegionSplinterRecordingSync from '../../../hooks/ui/region/useRegionSplinterRecordingSync';
import { RegionManipulation } from '../../../types/RegionManipulation';
import { BaseContainer, Wrapper } from './Region.styled';

function Region() {
  const [isSelected, setIsSelected] = useState(false);
  const [isMoving, setIsMoving] = useState(false);
  const [isTrimmingStart, setIsTrimmingStart] = useState(true);
  const [isTrimmingEnd, setIsTrimmingEnd] = useState(false);

  const id = useContext(RegionContext);

  const audioBuffer = useRecoilValue(regionStore.audioBuffer(id));
  const start = useRecoilValue(regionStore.start(id));
  const trimStart = useRecoilValue(regionStore.trimStart(id));
  const trimEnd = useRecoilValue(regionStore.trimEnd(id));
  const [isMuted, setIsMuted] = useRecoilState(regionStore.isMuted(id));

  const secondsToPixel = useSecondsToPixel();
  const regionWidth = useRegionWidth();
  const trimmedRegionWidth = useTrimmedRegionWidth();

  const isTrimming = isTrimmingEnd || isTrimmingStart;
  const isUnderManipulation = isMoving || isTrimming;

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
        <MoveWrapper onManipulateStart={() => setIsMoving(true)}
                     onManipulateEnd={() => setIsMoving(false)}/>
        <TrimWrapper onManipulateStart={type => setTrimming(type, true)}
                     onManipulateEnd={type => setTrimming(type, false)}/>
        {audioBuffer && <Waveform audioBuffer={audioBuffer.get()} height={68} width={regionWidth - 4}
                                  offsetX={-secondsToPixel(trimStart)}/>}
      </Wrapper>
    </BaseContainer>
  );
}

export default Region;
