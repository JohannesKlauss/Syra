import React from 'react';
import { Grid } from '@material-ui/core';
import Instrument_Channel_Experimental from '../../lab/Instrument_Channel_Experimental';

function Home() {
  return (
    <Grid container spacing={5}>
      <Grid item xs={12}>
        <Instrument_Channel_Experimental/>
      </Grid>
    </Grid>
  );
}

export default Home;
