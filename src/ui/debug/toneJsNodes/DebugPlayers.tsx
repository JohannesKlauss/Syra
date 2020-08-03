import React, { useContext, useState } from 'react';
import { RegionContext } from '../../../providers/RegionContext';
import useToneAudioNodes from '../../../hooks/tone/useToneAudioNodes';
import {
  Button,
  Checkbox,
  Grid,
  Paper,
  Slider,
  TableCell,
  TableContainer,
  TableRow,
  Typography,
} from '@material-ui/core';
import { useRecoilValue } from 'recoil/dist';
import { regionStore } from '../../../recoil/regionStore';
import CheckIcon from '@material-ui/icons/Check';
import ErrorOutlineIcon from '@material-ui/icons/ErrorOutline';
import CloseIcon from '@material-ui/icons/Close';

function DebugPlayers() {
  const regionId = useContext(RegionContext);

  const [isPlaying, setIsPlaying] = useState(false);

  const audioBufferPointer = useRecoilValue(regionStore.audioBufferPointer(regionId));
  const audioBuffer = useRecoilValue(regionStore.audioBuffer(regionId));

  const { players } = useToneAudioNodes();

  if (!players.has(regionId)) {
    return (
      <>
        <ErrorOutlineIcon color={'secondary'}/>
        <Typography variant={'overline'}>No Player assigned to this region</Typography>
      </>
    )
  }

  return (
    <>
      <Grid container spacing={3}>
        <Grid item sm={2}>
          <Typography variant={'overline'}>Actions</Typography>
          <br/><br/>
          <Button variant={'contained'} onClick={() => {
            if (!isPlaying) {
              players.player(regionId).unsync().start(0.001);
              setIsPlaying(true);
            }
            else {
              players.player(regionId).stop().sync();
              setIsPlaying(false);
            }
          }} disabled={!players.has(regionId)}>{isPlaying ? 'Stop' : 'Start'} Player</Button>
        </Grid>
        <Grid item sm={5}>
          <TableContainer component={Paper}>
            <TableRow>
              <TableCell>
                Players Id:
              </TableCell>
              <TableCell>
                {players.name}
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>
                AudioBufferPointer Id:
              </TableCell>
              <TableCell>
                {audioBufferPointer}
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>
                AudioBuffer:
              </TableCell>
              <TableCell>
                {audioBuffer?.duration ? <CheckIcon color={'primary'}/> : <ErrorOutlineIcon color={'secondary'}/>}
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>
                AudioBuffer duration:
              </TableCell>
              <TableCell>
                {audioBuffer?.duration ?? '-'} seconds
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>
                ToneAudioBuffer:
              </TableCell>
              <TableCell>
                {players.player(regionId).buffer.duration ? <CheckIcon color={'primary'}/> : <ErrorOutlineIcon color={'secondary'}/>}
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>
                ToneAudioBuffer duration:
              </TableCell>
              <TableCell>
                {players.player(regionId).buffer.duration ?? '-'} seconds
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>
                Player state:
              </TableCell>
              <TableCell>
                {players.player(regionId).state}
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>
                Is Muted:
              </TableCell>
              <TableCell>
                {players.player(regionId).mute ? <CheckIcon/> : <CloseIcon/>}
              </TableCell>
              <TableCell>
                <Checkbox
                  defaultChecked={players.player(regionId).mute}
                  onChange={(_, newValue) => players.player(regionId).set({mute: newValue})}
                />
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>
                Volume:
              </TableCell>
              <TableCell>
                {players.player(regionId).volume.value}
              </TableCell>
              <TableCell width={150}>
                <Slider
                  defaultValue={players.player(regionId).volume.value}
                  min={-100}
                  max={6}
                  step={0.1}
                  onChange={(_, newValue) => players.player(regionId).set({volume: newValue as number})}
                />
              </TableCell>
            </TableRow>
          </TableContainer>
        </Grid>
      </Grid>
    </>
  );
}

export default DebugPlayers;
