import React, { useContext, useMemo, useState } from 'react';
import { RegionContext } from '../../../providers/RegionContext';
import { useRecoilValue } from 'recoil/dist';
import { regionStore } from '../../../recoil/regionStore';
import Waveform from '../../Waveform/Waveform';
import { Paper, styled } from '@material-ui/core';
import { ChannelContext } from '../../../providers/ChannelContext';
import { channelStore } from '../../../recoil/channelStore';
import { arrangeWindowStore } from '../../../recoil/arrangeWindowStore';
import MoveWrapper from './MoveWrapper';

interface BaseContainerProps {
  color: string;
  isSelected: boolean;
  translateX: number;
}

const BaseContainer = styled(Paper)({
  margin: 0,
  marginTop: 1,
  height: 68,
  willChange: 'transform',
  position: 'relative',
  transform: ({ translateX }: BaseContainerProps) => `translateX(${translateX}px)`,
  backgroundColor: ({ color }: BaseContainerProps) => color,
  border: ({ isSelected, color }: BaseContainerProps) => `2px solid ${isSelected ? 'white' : color}`,
});

function Region() {
  const [isSelected, setIsSelected] = useState(false);
  const channelId = useContext(ChannelContext);
  const id = useContext(RegionContext);
  const audioBuffer = useRecoilValue(regionStore.audioBuffer(id));
  const start = useRecoilValue(regionStore.start(id));
  const channelColor = useRecoilValue(channelStore.color(channelId));
  const pixelPerSecond = useRecoilValue(arrangeWindowStore.pixelPerSecond);

  const regionWidth = useMemo(() => pixelPerSecond * (audioBuffer?.duration ?? 0), [audioBuffer, pixelPerSecond]);
  const translateX = useMemo(() => pixelPerSecond * start, [pixelPerSecond, start]);

  return (
    <BaseContainer translateX={translateX} isSelected={isSelected} color={channelColor} style={{ width: regionWidth }}
                   onClick={() => setIsSelected(currVal => !currVal)}>
      <MoveWrapper isSelected={isSelected}/>
      {audioBuffer && <Waveform audioBuffer={audioBuffer.get()} height={68} width={regionWidth - 4}/>}
    </BaseContainer>
  );
}

export default Region;
