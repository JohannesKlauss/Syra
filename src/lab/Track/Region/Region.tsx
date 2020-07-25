import React, { useContext, useEffect,  useState } from 'react';
import { RegionContext } from '../../../providers/RegionContext';
import { useRecoilState, useRecoilValue } from 'recoil/dist';
import { regionStore } from '../../../recoil/regionStore';
import Waveform from '../../Waveform/Waveform';
import { Paper, PaperProps, styled } from '@material-ui/core';
import { ChannelContext } from '../../../providers/ChannelContext';
import { channelStore } from '../../../recoil/channelStore';
import useRegionScheduler from '../../../hooks/audio/useRegionScheduler';
import { red } from '@material-ui/core/colors';
import { projectStore } from '../../../recoil/projectStore';
import { useHotkeys } from 'react-hotkeys-hook';
import useRegionWidth from '../../../hooks/ui/region/useRegionWidth';
import useSecondsToPixel from '../../../hooks/ui/useSecondsToPixel';
import MoveWrapper from './MoveWrapper';

interface BaseContainerProps {
  color: string;
  isSelected: boolean;
  isMuted: boolean;
  translateX: number;
}

const Wrapper = styled('div')({
  width: '100%',
  height: '100%',
  position: 'relative',
})

const BaseContainer = styled(
  ({ color, isSelected, isMuted, translateX, ...other }: BaseContainerProps & Omit<PaperProps, keyof BaseContainerProps>) => <Paper {...other} />,
)({
  margin: 0,
  marginTop: 1,
  height: 68,
  willChange: 'transform',
  position: 'absolute',
  opacity: ({isMuted}: BaseContainerProps) => isMuted ? 0.5 : 1,
  transform: ({ translateX }: BaseContainerProps) => `translateX(${translateX}px)`,
  backgroundColor: ({ color }: BaseContainerProps) => color,
  border: ({ isSelected, color }: BaseContainerProps) => `2px solid ${isSelected ? 'white' : color}`,
  '&:focus': {
    outline: 'none',
  }
});

function Region() {
  const [isSelected, setIsSelected] = useState(false);
  const channelId = useContext(ChannelContext);
  const id = useContext(RegionContext);
  const audioBuffer = useRecoilValue(regionStore.audioBuffer(id));
  const start = useRecoilValue(regionStore.start(id));
  const isSplinterRecording = useRecoilValue(projectStore.isRecording);
  const [isRecording, setIsRecording] = useRecoilState(regionStore.isRecording(id));
  const [isMuted, setIsMuted] = useRecoilState(regionStore.isMuted(id));
  const channelColor = useRecoilValue(channelStore.color(channelId));
  const translateX = useSecondsToPixel(start);
  const regionWidth = useRegionWidth();

  const ref = useHotkeys('ctrl+m', () => setIsMuted(currVal => !currVal));

  useRegionScheduler();

  useEffect(() => {
    if (!isSplinterRecording) {
      setIsRecording(false);
    }
  }, [isSplinterRecording, setIsRecording]);


  return (
    <BaseContainer translateX={translateX} isSelected={isSelected} color={isRecording ? red['500'] : channelColor} style={{ width: regionWidth }}
                   onMouseDown={() => setIsSelected(true)} isMuted={isMuted} innerRef={ref} tabIndex={0}>
      <Wrapper>
        <MoveWrapper/>
        {audioBuffer && <Waveform audioBuffer={audioBuffer.get()} height={68} width={regionWidth - 4}/>}
      </Wrapper>
    </BaseContainer>
  );
}

export default Region;
