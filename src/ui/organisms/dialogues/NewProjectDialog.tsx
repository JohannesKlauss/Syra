import React, { useEffect, useState } from 'react';
import {
  Button,
  Dialog, DialogActions,
  DialogContent, DialogContentText,
  DialogTitle, Grid, styled,
  TextField, Typography,
} from '@material-ui/core';
import { projectStore } from '../../../recoil/projectStore';
import { useRecoilState } from 'recoil';
import { Alert, ToggleButton, ToggleButtonGroup } from '@material-ui/lab';
import { ChannelType } from '../../../types/Channel';
import useTapTempo from '../../../hooks/audio/useTapTempo';
import { buttonInfo } from '../../../utils/text';
import { useHotkeys } from 'react-hotkeys-hook';
import { TIME_CONVERSION_RESOLUTION } from '../../../const/musicalConversionConstants';
import { bpmStaticRampFactory } from '../../../utils/bpmRamps';

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
  const [tempoMap, setTempoMap] = useRecoilState(projectStore.tempoMap);
  const [length, setLength] = useRecoilState(projectStore.lengthInQuarters);

  const [channelType, setChannelType] = useState(ChannelType.AUDIO);
  const [numChannels, setNumChannels] = useState(1);

  const { tap, tappedTempo } = useTapTempo(tempoMap[0](0));

  useHotkeys('space', tap);

  useEffect(() => {
    setTempoMap({ 0: bpmStaticRampFactory(tappedTempo) });
  }, [tappedTempo, setTempoMap]);

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
              value={tempoMap[0]}
              onChange={e => setTempoMap({ 0: bpmStaticRampFactory(parseFloat(e.target.value)) })}
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
          <Grid item>
            <TextField
              margin="dense"
              type={'number'}
              label={'Project length in bars'}
              value={length}
              onChange={e => setLength(parseInt(e.target.value) / TIME_CONVERSION_RESOLUTION)}
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
