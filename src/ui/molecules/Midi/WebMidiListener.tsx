import React, { useEffect, useState } from 'react';
import { useSetRecoilState } from 'recoil/dist';
import { keyboardMidiStore } from '../../../recoil/keyboardMidiStore';
import WebMidi from 'webmidi';
import InfoBox from '../../organisms/InfoBox';

function WebMidiListener() {
  const setMidiDevice = useSetRecoilState(keyboardMidiStore.selectedMidiDevice);
  const setIsMidiEnabled = useSetRecoilState(keyboardMidiStore.isMidiEnabled);
  const [showInfoBox, setShowInfoBox] = useState(false);
  const [infoBoxText, setInfoBoxText] = useState('');

  useEffect(() => {
    WebMidi.enable(function(error) {
      if (error === undefined) {
        setIsMidiEnabled(true);
        setInfoBoxText(`Detected ${WebMidi.inputs.length} MIDI inputs and ${WebMidi.outputs.length} outputs.`);
        setShowInfoBox(true);
      } else {
        setIsMidiEnabled(false);
        setInfoBoxText(`Could not enable Web MIDI.`);
        setShowInfoBox(true);
      }

      if (WebMidi.inputs.length > 0) {
        setMidiDevice(WebMidi.inputs[0].name);
      }
    });
  });

  return (
    <InfoBox severity={'info'} text={infoBoxText} show={showInfoBox}/>
  );
}

export default WebMidiListener;
