import React from 'react';
import { GridList, styled } from '@material-ui/core';
import { useRecoilValue } from 'recoil/dist';
import UI_BASE_CHANNEL_EXPERIMENTAL from './BaseChannel';
import NewChannelFab from '../../ui/molecules/Fabs/NewChannelFab';
import { channelStore } from '../../recoil/channelStore';

const Container = styled(GridList)({
  flexWrap: 'nowrap',
  // Promote the list into it's own layer on Chrome. This cost memory but helps keeping high FPS.
  transform: 'translateZ(0)',
  overflowX: 'scroll',
});

const Flexer = styled('div')({
  display: 'flex',
  alignItems: 'flex-end',
  marginTop: 20,
});

function HorizontalChannelList() {
  const channels = useRecoilValue(channelStore.ids);

  return (
    <Flexer>
      <Container>
        {channels.map(id => <UI_BASE_CHANNEL_EXPERIMENTAL key={id} channelId={id}/>)}
      </Container>
      <NewChannelFab/>
    </Flexer>
  );
}

export default HorizontalChannelList;
