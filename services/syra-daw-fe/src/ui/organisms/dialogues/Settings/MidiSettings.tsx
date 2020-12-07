import React, { SyntheticEvent } from "react";
import { keyboardMidiStore } from "../../../../recoil/keyboardMidiStore";
import { useRecoilState } from "recoil";
import { FormControl, FormLabel, Select } from '@chakra-ui/react';
import WebMidi from "webmidi";

interface Props {

}

const MidiSettings: React.FC<Props> = ({}) => {
  const [selectedMidiDevice, setSelectedMidiDevice] = useRecoilState(keyboardMidiStore.selectedMidiDevice);

  const updateSelectedMidiDevice = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedMidiDevice(e.target.value);
    localStorage.setItem('lastMidiDevice', e.target.value);
  }

  return (
    <>
      <FormControl isRequired marginY={4}>
          <FormLabel>Active MIDI Device</FormLabel>
          <Select placeholder="Select MIDI Device" value={selectedMidiDevice ?? ''} onChange={updateSelectedMidiDevice}>
            {WebMidi.inputs.map(device => (
              <option key={device.id} value={device.name}>{device.name}</option>
            ))}
          </Select>
      </FormControl>
    </>
  );
};

export default MidiSettings;
