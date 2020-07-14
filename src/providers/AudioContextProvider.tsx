import React, { useCallback, useEffect } from 'react';
import { Container, FormControl, Grid, InputLabel, MenuItem, Select } from '@material-ui/core';
import Home from '../ui/screen/Home';
import { useRecoilState } from 'recoil/dist';
import WebMidi from 'webmidi';
import { keyboardMidiStore } from '../recoil/keyboardMidi';

function AudioContextProvider() {
  const [midiDevice, setMidiDevice] = useRecoilState(keyboardMidiStore.selectedMidiDevice);

  const onChangeMidiDevice = useCallback((event: React.ChangeEvent<{ value: unknown }>) => {
    setMidiDevice(event.target.value as string);
  }, [setMidiDevice]);

  useEffect(() => {
    setTimeout(() => {
      if (WebMidi.inputs.length > 0) {
        setMidiDevice(WebMidi.inputs[0].name);
      }
    }, 1500); // TODO: THIS ISN'T CLEAN. THE EFFECT DOESN'T REALIZE THAT WebMidi inputs HAVE CHANGED.
  }, [setMidiDevice]);

  return (
    <Container>
      <Grid container spacing={8}>
        <Grid item xs={12}>
          <Grid container>
            <Grid item xs={4}>
              <FormControl style={{minWidth: 120}}>
                <InputLabel id="midi-device-select">MIDI Device</InputLabel>
                <Select
                  labelId="midi-device-select"
                  id="midi-device-select"
                  value={midiDevice}
                  onChange={onChangeMidiDevice}

                >
                  {WebMidi.inputs.map(input => <MenuItem key={input.name} value={input.name}>{input.manufacturer} {input.name}</MenuItem>)}
                </Select>
              </FormControl>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12}>
          <Home/>
        </Grid>
      </Grid>
    </Container>
  );
}

export default AudioContextProvider;
