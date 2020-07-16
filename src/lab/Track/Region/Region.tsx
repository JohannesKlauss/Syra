import React, { useContext } from 'react';
import { RegionContext } from '../../../providers/RegionContext';
import { useRecoilValue } from 'recoil/dist';
import { regionStore } from '../../../recoil/regionStore';
import WaveForm from '../../WaveForm/WaveForm';
import { Paper, styled } from '@material-ui/core';
import { ChannelContext } from '../../../providers/ChannelContext';
import { channelStore } from '../../../recoil/channelStore';

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

  return (
    <BaseContainer color={channelColor}>
      {audioBuffer && <WaveForm audioBuffer={audioBuffer.get()}/>}
    </BaseContainer>
  );
}

export default Region;
