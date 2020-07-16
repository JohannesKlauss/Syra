import React, { useContext, useMemo } from 'react';
import { RegionContext } from '../../../providers/RegionContext';
import { useRecoilValue } from 'recoil/dist';
import { regionStore } from '../../../recoil/regionStore';
import Waveform from '../../Waveform/Waveform';
import { Paper, styled } from '@material-ui/core';
import { ChannelContext } from '../../../providers/ChannelContext';
import { channelStore } from '../../../recoil/channelStore';
import { arrangeWindowStore } from '../../../recoil/arrangeWindowStore';

interface BaseContainerProps {
  color: string;
}

const BaseContainer = styled(Paper)({
  margin: 0,
  height: 70,
  backgroundColor: ({color}: BaseContainerProps) => color,
});

function Region() {
  const channelId = useContext(ChannelContext);
  const id = useContext(RegionContext);
  const audioBuffer = useRecoilValue(regionStore.audioBuffer(id));
  const channelColor = useRecoilValue(channelStore.color(channelId));
  const pixelPerSecond = useRecoilValue(arrangeWindowStore.pixelPerSecond);

  const regionWidth = useMemo(() => pixelPerSecond * (audioBuffer?.duration ?? 0), [audioBuffer, pixelPerSecond]);

  return (
    <BaseContainer color={channelColor} style={{width: regionWidth}}>
      {audioBuffer && <Waveform audioBuffer={audioBuffer.get()} height={70} width={regionWidth}/>}
    </BaseContainer>
  );
}

export default Region;
