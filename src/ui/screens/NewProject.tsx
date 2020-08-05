import React, { useCallback } from 'react';
import { Container, Grid, Typography, Button, TextField } from '@material-ui/core';
import { useHistory } from "react-router-dom";
import * as Tone from 'tone';
import { projectStore } from '../../recoil/projectStore';
import { useRecoilState } from 'recoil/dist';

function NewProject() {
  const history = useHistory();
  const [name, setName] = useRecoilState(projectStore.name);

  const onClick = useCallback(async () => {
    await Tone.start();

    history.push('/');
  }, [history]);

  return (
    <Container>
      <Grid container spacing={3} alignItems={'center'} justify={'center'} alignContent={'center'}>
        <Grid item sm={12}>
          <Typography variant={'h4'} align={'center'}>New Syra Project</Typography>
        </Grid>
        <Grid item sm={6}>
          <TextField label={'Project name'} value={name} onChange={e => setName(e.target.value)} fullWidth/>
        </Grid>
        <Grid item sm={6}>
          <Button variant={'contained'} onClick={onClick}>Create new Project</Button>
        </Grid>
      </Grid>
    </Container>
  );
}

export default NewProject;
