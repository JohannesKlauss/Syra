import React from 'react';
import { Grid } from '@material-ui/core';
import UI_CHANNEL_EXPERIMENTAL from '../../lab/UI_CHANNEL_EXPERIMENTAL';

function Home() {
  return (
    <Grid container spacing={5}>
      <Grid item xs={12}>
        <UI_CHANNEL_EXPERIMENTAL/>
      </Grid>
    </Grid>
  );
}

export default Home;
