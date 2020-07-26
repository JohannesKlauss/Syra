import React, { useContext, useEffect, useMemo, useState } from 'react';
import { RegionContext } from '../../../providers/RegionContext';
import { useRecoilState, useRecoilValue } from 'recoil/dist';
import { regionStore } from '../../../recoil/regionStore';
import Waveform from '../../Waveform/Waveform';
import { Paper, PaperProps, styled, useTheme } from '@material-ui/core';
import { ChannelContext } from '../../../providers/ChannelContext';
import { channelStore } from '../../../recoil/channelStore';
import useRegionScheduler from '../../../hooks/audio/useRegionScheduler';
import { red } from '@material-ui/core/colors';
import { projectStore } from '../../../recoil/projectStore';
import { useHotkeys } from 'react-hotkeys-hook';
import useRegionWidth from '../../../hooks/ui/region/useRegionWidth';
import useSecondsToPixel from '../../../hooks/ui/useSecondsToPixel';
import MoveWrapper from './MoveWrapper';
import TrimWrapper from './TrimWrapper';
import useTrimmedRegionWidth from '../../../hooks/ui/region/useTrimmedRegionWidth';

interface BaseContainerProps {
  color: string;
  isSelected: boolean;
  isMuted: boolean;
  translateX: number;
  width: number;
  isUnderManipulation: boolean;
}

const Wrapper = styled('div')({
  width: '100%',
  height: '100%',
  position: 'relative',
});

const BaseContainer = styled(
  ({ color, width, isUnderManipulation, isSelected, isMuted, translateX, ...other }: BaseContainerProps & Omit<PaperProps, keyof BaseContainerProps>) =>
    <Paper {...other} />,
)({
  margin: 0,
  marginTop: 1,
  height: 68,
  willChange: 'transform',
  position: 'absolute',
  overflow: ({ isUnderManipulation }: BaseContainerProps) => isUnderManipulation ? 'initial' : 'hidden',
  width: ({ width }: BaseContainerProps) => width,
  opacity: ({ isMuted }: BaseContainerProps) => isMuted ? 0.5 : 1,
  transform: ({ translateX }: BaseContainerProps) => `translateX(${translateX}px)`,
  backgroundColor: ({ color }: BaseContainerProps) => color,
  border: ({ isSelected, color }: BaseContainerProps) => `2px solid ${isSelected ? 'white' : color}`,
  '&:focus': {
    outline: 'none',
  },
});

function Region() {
  const [isSelected, setIsSelected] = useState(false);
  const [isMoving, setIsMoving] = useState(false);
  const [isTrimming, setIsTrimming] = useState(false);

  const theme = useTheme();
  const channelId = useContext(ChannelContext);
  const id = useContext(RegionContext);
  const audioBuffer = useRecoilValue(regionStore.audioBuffer(id));
  const start = useRecoilValue(regionStore.start(id));
  const isSplinterRecording = useRecoilValue(projectStore.isRecording);
  const [isRecording, setIsRecording] = useRecoilState(regionStore.isRecording(id));
  const [isMuted, setIsMuted] = useRecoilState(regionStore.isMuted(id));
  const channelColor = useRecoilValue(channelStore.color(channelId));
  const translateX = useSecondsToPixel();
  const regionWidth = useRegionWidth();
  const trimmedRegionWidth = useTrimmedRegionWidth();

  const ref = useHotkeys('ctrl+m', () => setIsMuted(currVal => !currVal));

  useRegionScheduler();

  const isUnderManipulation = isMoving || isTrimming;

  useEffect(() => {
    if (!isSplinterRecording) {
      setIsRecording(false);
    }
  }, [isSplinterRecording, setIsRecording]);

  const color = useMemo(() => {
    if (isRecording) {
      return red['500'];
    } else if (isUnderManipulation) {
      return theme.palette.background.paper;
    }

    return channelColor;
  }, [isRecording, channelColor, isUnderManipulation, theme]);

  return (
    <BaseContainer translateX={translateX(start)} isSelected={isSelected} color={color}
                   width={isTrimming ? regionWidth : trimmedRegionWidth}
                   isUnderManipulation={isUnderManipulation}
                   onMouseDown={() => setIsSelected(true)} isMuted={isMuted} innerRef={ref} tabIndex={0}>
      <Wrapper>
        <MoveWrapper onManipulateStart={() => setIsMoving(true)}
                     onManipulateEnd={() => setIsMoving(false)}/>
        <TrimWrapper onManipulateStart={() => setIsTrimming(true)}
                     onManipulateEnd={() => setIsTrimming(false)}/>
        {audioBuffer && <Waveform audioBuffer={audioBuffer.get()} height={68} width={regionWidth - 4}/>}
      </Wrapper>
    </BaseContainer>
  );
}

export default Region;
