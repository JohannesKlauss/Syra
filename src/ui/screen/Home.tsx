import React, { useRef } from 'react';
import { Grid } from '@material-ui/core';
import UI_CHANNEL_EXPERIMENTAL from '../../lab/UI_CHANNEL_EXPERIMENTAL';
import useAudioContext from '../../hooks/audio/useAudioContext';
import { ChannelContext } from '../../providers/ChannelContext';
const uniqid = require('uniqid');

function Home() {
  const context = useAudioContext();
  const id = useRef(uniqid('channel-'));

  return (
    <Grid container spacing={5}>
      <Grid item xs={12}>
        {context.state === 'running' &&<ChannelContext.Provider value={id.current}><UI_CHANNEL_EXPERIMENTAL/></ChannelContext.Provider>}
      </Grid>
    </Grid>
  );
}

export default Home;
