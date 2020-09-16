import React from 'react';
import { GridList, styled } from '@material-ui/core';
import { useRecoilValue } from 'recoil';
import NewChannelFab from '../../Fabs/NewChannelFab';
import { channelStore } from '../../../../recoil/channelStore';
import BaseChannel from './BaseChannel';

const Container = styled(GridList)({
  flexWrap: 'nowrap',
  // Promote the list into it's own layer on Chrome. This cost memory but helps keeping high FPS.
  transform: 'translateZ(0)',
  overflowX: 'scroll',
});

const Flexer = styled('div')(({theme}) => ({
  display: 'flex',
  alignItems: 'flex-end',
  position: 'absolute',
  bottom: 0,
  left: 0,
  background: theme.palette.background.default,
  borderRadius: theme.shape.borderRadius,
  paddingTop: 2,
  borderTop: `2px solid ${theme.palette.primary.light}`,
  zIndex: 1,
  width: '100%',
}));

function HorizontalChannelList() {
  const channels = useRecoilValue(channelStore.ids);

  return (
    <Flexer>
      <Container>
        {channels.map(id => <BaseChannel key={id} channelId={id}/>)}
      </Container>
      <NewChannelFab/>
    </Flexer>
  );
}

export default HorizontalChannelList;
