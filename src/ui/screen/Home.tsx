import React from 'react';
import { Grid } from '@material-ui/core';
import SoulAudioInputTest from '../../lab/SoulAudioInputTest';
import SoulInstrumentTest from '../../lab/SoulInstrumentTest';

function Home() {
  return (
    <Grid container spacing={5}>
      <Grid item xs={12}>
        <SoulAudioInputTest patchName={'freeverb'}/>
      </Grid>
      <Grid item xs={12}>
        <SoulInstrumentTest instrument={'piano'}/>
      </Grid>
    </Grid>
  );
}

export default Home;
