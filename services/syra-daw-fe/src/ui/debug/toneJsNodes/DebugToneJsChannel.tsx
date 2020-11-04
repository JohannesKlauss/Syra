import React, { useContext } from 'react';
import {
  Checkbox,
  Grid,
  Paper,
  Slider,
  TableCell,
  TableContainer,
  TableRow,
  Typography,
} from '@material-ui/core';
import CheckIcon from '@material-ui/icons/Check';
import CloseIcon from '@material-ui/icons/Close';
import useBackboneChannel from '../../../hooks/tone/BackboneMixer/useBackboneChannel';
import { ChannelContext } from '../../../providers/ChannelContext';

function DebugToneJsChannel() {
  const channelId = useContext(ChannelContext);
  const { channel } = useBackboneChannel(channelId);

  return (
    <>
      <Grid container spacing={3}>
        <Grid item sm={2}>
          <Typography variant={'overline'}>Actions</Typography>
        </Grid>
        <Grid item sm={5}>
          <TableContainer component={Paper}>
            <TableRow>
              <TableCell>
                Volume:
              </TableCell>
              <TableCell>
                {channel.volume.value}
              </TableCell>
              <TableCell width={150}>
                <Slider
                  value={channel.volume.value}
                  min={-100}
                  max={6}
                  step={0.1}
                  onChange={(_, newValue) => channel.set({volume: newValue as number})}
                />
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>
                Pan:
              </TableCell>
              <TableCell>
                {channel.pan.value}
              </TableCell>
              <TableCell width={150}>
                <Slider
                  value={channel.volume.value}
                  min={-100}
                  max={100}
                  step={1}
                  onChange={(_, newValue) => channel.set({pan: newValue as number})}
                />
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>
                Is muted:
              </TableCell>
              <TableCell>
                {channel.muted ? <CheckIcon/> : <CloseIcon/>}
              </TableCell>
              <TableCell>
                <Checkbox
                  checked={channel.muted}
                  onChange={(_, newValue) => channel.set({mute: newValue})}
                />
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>
                Is Solo:
              </TableCell>
              <TableCell>
                {channel.solo ? <CheckIcon/> : <CloseIcon/>}
              </TableCell>
              <TableCell>
                <Checkbox
                  checked={channel.solo}
                  onChange={(_, newValue) => channel.set({solo: newValue})}
                />
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>
                Is Disposed:
              </TableCell>
              <TableCell>
                {channel.disposed ? <CheckIcon/> : <CloseIcon/>}
              </TableCell>
            </TableRow>
          </TableContainer>
        </Grid>
      </Grid>
    </>
  );
}

export default DebugToneJsChannel;
