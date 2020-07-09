import React, { useCallback, useEffect, useState } from 'react';
import { Button, Container, FormControl, Grid, InputLabel, MenuItem, Select } from '@material-ui/core';
import useAudioContext from '../hooks/audio/useAudioContext';
import * as Tone from 'tone';
import Home from '../ui/screen/Home';
import { useRecoilState } from 'recoil/dist';
import { selectedMidiDevice } from '../recoil/atoms/keyboardMidi';
import WebMidi from 'webmidi';

function AudioContextProvider() {
  const [contextIsRunning, setContextIsRunning] = useState(false);
  const [midiDevice, setMidiDevice] = useRecoilState(selectedMidiDevice);
  const context = useAudioContext();

  const onClickStartAudio = useCallback(async () => {
    await Tone.start();
    await context.resume();

    if (context.state === 'running') {
      setContextIsRunning(true);
    }

    await Tone.context.addAudioWorkletModule('worklets/SoulWasmAudioWorkletProcessor.js', 'soul-wasm-audio-worklet-processor');

    navigator.mediaDevices.enumerateDevices()
      .then(function(devices) {
        devices.forEach(function(device) {
          console.log(device.kind + ": " + device.label +
            " id = " + device.deviceId);
        });
      })
  }, [context]);

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
              <Button variant="contained" color={'primary'} onClick={onClickStartAudio}>
                {contextIsRunning ? 'AudioEngine is running...' : 'Start AudioEngine'}
              </Button>
            </Grid>
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
