import React, { useCallback, useEffect, useState } from 'react';
import { Box, FormControl, Grid, InputLabel, MenuItem, Select, styled, Typography } from '@material-ui/core';
import { useRecoilState } from 'recoil/dist';
import WebMidi from 'webmidi';
import { keyboardMidiStore } from '../recoil/keyboardMidiStore';
import { Skeleton } from '@material-ui/lab';
import { orange } from '@material-ui/core/colors';
import RegionObserver from '../ui/recoil/RegionObserver';

const BaseContainer = styled(Box)({
  width: '100vw',
  padding: 10,
  marginLeft: 0,
  marginRight: 0,
});

const LoadingSkeleton = styled(Skeleton)({
  width: '100vw',
  maxWidth: '100vw',
  height: '100vh',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  '& > *': {
    visibility: 'visible',
    color: orange[500],
  }
})

const MidiProvider: React.FC = ({ children }) => {
  const [midiDevice, setMidiDevice] = useRecoilState(keyboardMidiStore.selectedMidiDevice);
  const [isMidiEnabled, setIsMidiEnabled] = useState(false);

  const onChangeMidiDevice = useCallback((event: React.ChangeEvent<{ value: unknown }>) => {
    setMidiDevice(event.target.value as string);
  }, [setMidiDevice]);

  useEffect(() => {
    WebMidi.enable(function(error) {
      if (error === undefined) {
        setIsMidiEnabled(true);
      }

      if (WebMidi.inputs.length > 0) {
        setMidiDevice(WebMidi.inputs[0].name);
      }
    });
  });

  if (!isMidiEnabled) {
    return (
      <LoadingSkeleton variant={'rect'}>
        <Typography variant={'h1'}>splinter.io</Typography>
      </LoadingSkeleton>
    );
  }

  return (
    <BaseContainer>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Grid container>
            <Grid item xs={4}>
              <FormControl style={{ minWidth: 120 }}>
                <InputLabel id="midi-device-select">MIDI Device</InputLabel>
                <Select
                  labelId="midi-device-select"
                  id="midi-device-select"
                  value={midiDevice}
                  onChange={onChangeMidiDevice}
                >
                  {WebMidi.inputs.map(input =>
                    <MenuItem key={input.name} value={input.name}>{input.manufacturer} {input.name}</MenuItem>)
                  }
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={4}>
              <RegionObserver/>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12}>
          {children}
        </Grid>
      </Grid>
    </BaseContainer>
  );
};

export default MidiProvider;
