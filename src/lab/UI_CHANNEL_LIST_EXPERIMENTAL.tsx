import React from 'react';
import { GridList, IconButton, styled } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import { useRecoilState } from 'recoil/dist';
import { channelIds } from '../recoil/selectors/channel';
import UI_BASE_CHANNEL_EXPERIMENTAL from './UI_BASE_CHANNEL_EXPERIMENTAL';

const uniqid = require('uniqid');

const Container = styled(GridList)({
  flexWrap: 'nowrap',
  // Promote the list into his own layer on Chrome. This cost memory but helps keeping high FPS.
  transform: 'translateZ(0)',
  overflowX: 'scroll',
});

const Flexer = styled('div')({
  display: 'flex',
  alignItems: 'flex-end',
});

const AddButton = styled(IconButton)({});

function UI_CHANNEL_LIST_EXPERIMENTAL() {
  const [channels, setChannels] = useRecoilState(channelIds);

  return (
    <Flexer>
      <Container>
        {channels.map(id => <UI_BASE_CHANNEL_EXPERIMENTAL key={id} channelId={id}/>)}
      </Container>
      <AddButton key={'new-channel'} color="primary" size={'small'}
                 onClick={() => setChannels(currVal => [...currVal, uniqid('channel-')])}>
        <AddIcon/>
      </AddButton>
    </Flexer>
  );
}

export default UI_CHANNEL_LIST_EXPERIMENTAL;
