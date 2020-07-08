import React from 'react';
import { Grid } from '@material-ui/core';
import UI_CHANNEL_EXPERIMENTAL from '../../lab/UI_CHANNEL_EXPERIMENTAL';
import useAudioContext from '../../hooks/audio/useAudioContext';

function Home() {
  const context = useAudioContext();

  return (
    <Grid container spacing={5}>
      <Grid item xs={12}>
        {context.state === 'running' && <UI_CHANNEL_EXPERIMENTAL/>}
      </Grid>
    </Grid>
  );
}

export default Home;
