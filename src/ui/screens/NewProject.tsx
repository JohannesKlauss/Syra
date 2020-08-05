import React, { useCallback } from 'react';
import { Container, Grid, Typography, Button } from '@material-ui/core';
import { useHistory } from "react-router-dom";
import * as Tone from 'tone';

function NewProject() {
  const history = useHistory();

  const onClick = useCallback(async () => {
    await Tone.start();

    history.push('/');
  }, [history]);

  return (
    <Container>
      Hallo!
      <Grid container spacing={3}>
        <Grid item sm={12}>
          <Typography variant={'h1'}>New Project</Typography>
        </Grid>
        <Grid item sm={12}>
          <Button variant={'contained'} onClick={onClick}>Open new Project</Button>
        </Grid>
      </Grid>
    </Container>
  );
}

export default NewProject;
