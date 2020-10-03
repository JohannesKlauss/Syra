import React, { useContext } from 'react';
import { RegionContext } from '../../../providers/RegionContext';
import { Checkbox, Grid, Paper, TableCell, TableContainer, TableRow, TextField } from '@material-ui/core';
import { regionStore } from '../../../recoil/regionStore';
import { useRecoilState, useRecoilValue } from 'recoil';
import CheckIcon from '@material-ui/icons/Check';
import ErrorOutlineIcon from '@material-ui/icons/ErrorOutline';

function DebugRegion() {
  const regionId = useContext(RegionContext);

  const [start, setStart] = useRecoilState(regionStore.start(regionId));
  const audioBuffer = useRecoilValue(regionStore.audioBuffer(regionId));
  const audioBufferPointer = useRecoilValue(regionStore.audioBufferPointer(regionId));
  const name = useRecoilValue(regionStore.name(regionId));
  const [isSolo, setIsSolo] = useRecoilState(regionStore.isSolo(regionId));
  const [isMuted, setIsMuted] = useRecoilState(regionStore.isMuted(regionId));
  const [isRecording, setIsRecording] = useRecoilState(regionStore.isRecording(regionId));
  const [trimStart, setTrimStart] = useRecoilState(regionStore.trimStart(regionId));
  const [trimEnd, setTrimEnd] = useRecoilState(regionStore.trimEnd(regionId));

  return (
    <>
      <Grid container spacing={3}>
        <Grid item sm={12}>
          <TableContainer component={Paper}>
            <TableRow>
              <TableCell>
                Id:
              </TableCell>
              <TableCell>
                {regionId}
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>
                Name:
              </TableCell>
              <TableCell>
                {name}
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>
                Has Buffer:
              </TableCell>
              <TableCell>
                {audioBuffer?.duration ? <CheckIcon color={'primary'}/> : <ErrorOutlineIcon color={'secondary'}/>}
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>
                Buffer Duration:
              </TableCell>
              <TableCell>
                {audioBuffer?.duration ?? '-'} seconds
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>
                Buffer Pointer:
              </TableCell>
              <TableCell>
                {audioBufferPointer}
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>
                Is Muted:
              </TableCell>
              <TableCell>
                <Checkbox
                  checked={isMuted}
                  onChange={(_, newValue) => setIsMuted(newValue)}
                />
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>
                Is Solo:
              </TableCell>
              <TableCell>
                <Checkbox
                  checked={isSolo}
                  onChange={(_, newValue) => setIsSolo(newValue)}
                />
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>
                Is Recording:
              </TableCell>
              <TableCell>
                <Checkbox
                  checked={isRecording}
                  onChange={(_, newValue) => setIsRecording(newValue)}
                />
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>
                Start:
              </TableCell>
              <TableCell>
                <TextField value={start} type={'number'} onChange={(e) => setStart(parseFloat(e.target.value))} />
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>
                Trim Start:
              </TableCell>
              <TableCell>
                <TextField value={trimStart} type={'number'} onChange={(e) => setTrimStart(parseFloat(e.target.value))} />
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>
                Trim End:
              </TableCell>
              <TableCell>
                <TextField value={trimEnd} type={'number'} onChange={(e) => setTrimEnd(parseFloat(e.target.value))} />
              </TableCell>
            </TableRow>
          </TableContainer>
        </Grid>
      </Grid>
    </>
  );
}

export default DebugRegion;
