import React from 'react';
import { keyboardMidiStore } from '../../../../recoil/keyboardMidiStore';
import { useRecoilState } from 'recoil';
import { Alert, AlertIcon, FormControl, FormLabel, Select } from '@chakra-ui/react';
import WebMidi from 'webmidi';
import { detect } from 'detect-browser';

const MidiSettings: React.FC = () => {
  const [selectedMidiDevice, setSelectedMidiDevice] = useRecoilState(keyboardMidiStore.selectedMidiDevice);

  const browser = detect();

  return (
    <>
      <FormControl marginY={4}>
        <FormLabel>Active MIDI Device</FormLabel>
        <Select placeholder="Select MIDI Device" value={selectedMidiDevice ?? ''} onChange={e => setSelectedMidiDevice(e.target.value)}>
          {WebMidi.inputs.map((device) => (
            <option key={device.id} value={device.name}>
              {device.name}
            </option>
          ))}
        </Select>
        {browser?.name === 'firefox' ? (
          <Alert status="info" my={2}>
            <AlertIcon />
            Please note that Firefox does not support external MIDI devices.
            To use such devices please consider a Chromium based browser, like
            Chrome, Opera, Iron or Edge.
          </Alert>
        ) : null}
      </FormControl>
    </>
  );
};

export default MidiSettings;
