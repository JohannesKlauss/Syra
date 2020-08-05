import React, { useEffect, useState } from 'react';
import {
  Button,
  Dialog, DialogActions,
  DialogContent, DialogContentText,
  DialogTitle, Grid, styled,
  TextField, Typography,
} from '@material-ui/core';
import { projectStore } from '../../../recoil/projectStore';
import { useRecoilState } from 'recoil/dist';
import { Alert, ToggleButton, ToggleButtonGroup } from '@material-ui/lab';
import { ChannelType } from '../../../types/Channel';
import useTapTempo from '../../../hooks/audio/useTapTempo';
import { buttonInfo } from '../../../utils/text';
import { useHotkeys } from 'react-hotkeys-hook';

const CustomToggleButtonGroup = styled(ToggleButtonGroup)({
  width: '100%',
});

const CustomToggleButton = styled(ToggleButton)({
  width: '50%',
});

interface Props {
  open: boolean;
  onCancel?: () => void;
  onCreate?: (channelType: ChannelType, numChannels: number) => void;
}

function NewProjectDialog({onCreate, open, onCancel}: Props) {
  const [name, setName] = useRecoilState(projectStore.name);
  const [bpm, setBpm] = useRecoilState(projectStore.bpm);

  const [channelType, setChannelType] = useState(ChannelType.AUDIO);
  const [numChannels, setNumChannels] = useState(1);

  const { tap, tappedTempo } = useTapTempo(bpm);

  useHotkeys('space', tap);

  useEffect(() => {
    setBpm(tappedTempo);
  }, [tappedTempo, setBpm]);

  return (
    <Dialog open={open}>
      <DialogTitle>Welcome To Syra - Create a new Project</DialogTitle>
      <DialogContent>
        <DialogContentText>
          <Typography variant={'body2'}>
            Syra is a web based DAW with a professional workflow that empowers you to create top notch music with your
            friends and colleagues.
          </Typography>
        </DialogContentText>
      </DialogContent>
      <DialogContent>
        <TextField
          autoFocus
          margin="dense"
          label="Project name"
          fullWidth
          value={name}
          onChange={e => setName(e.target.value)}
        />
      </DialogContent>
      <DialogContent>
        <Grid container spacing={3} alignItems={'center'}>
          <Grid item>
            <TextField
              margin="dense"
              type={'number'}
              label={'Tempo'}
              value={bpm}
              onChange={e => setBpm(parseFloat(e.target.value))}
            />
          </Grid>
          <Grid item>
            <Button variant={'contained'} onClick={tap} title={buttonInfo('Tap Tempo', 'Space')}>Tap</Button>
          </Grid>
          <Grid item>
            <TextField
              margin="dense"
              label={'Key'}
              value={'C Maj'}
            />
          </Grid>
        </Grid>
      </DialogContent>
      <DialogContent>
        <TextField
          margin="dense"
          label="Number of channels to create"
          type={'number'}
          fullWidth
          value={numChannels}
          onChange={e => setNumChannels(parseInt(e.target.value))}
        />
      </DialogContent>
      <DialogContent>
        <CustomToggleButtonGroup
          value={channelType}
          exclusive
          onChange={(_, newValue) => setChannelType(newValue)}
          size={'large'}
        >
          <CustomToggleButton value={ChannelType.AUDIO}>
            <Typography variant={'overline'}>Audio Channels</Typography>
          </CustomToggleButton>
          <CustomToggleButton value={ChannelType.INSTRUMENT}>
            <Typography variant={'overline'}>Software Instrument Channels</Typography>
          </CustomToggleButton>
        </CustomToggleButtonGroup>
      </DialogContent>
      <DialogContent>
        <DialogContentText>
          <Alert severity="info">You can always change all the parameters later inside the editor.</Alert>
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={() => onCancel && onCancel } color="default">
          Cancel
        </Button>
        <Button onClick={() => onCreate && onCreate(channelType, numChannels)} color="primary">
          Create
        </Button>
      </DialogActions>
    </Dialog>
  );
}

export default NewProjectDialog;
