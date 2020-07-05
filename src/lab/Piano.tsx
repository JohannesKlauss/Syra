/* Inspiration is taken from ritz078's piano implementation. https://github.com/ritz078/raaga/blob/master/components/Piano/Piano.tsx */

import React, { useCallback, useState } from 'react';
import * as Tone from 'tone';
import { MidiNumbers } from 'piano-utils';
import { getAllMidiNumbersInRange, getNaturalKeyWidthRatio, getRelativeKeyPosition } from '../utils/keyboardMidiHelper';
import { styled } from '@material-ui/core';
import { useRecoilState } from 'recoil/dist';
import { activeKeyboardMidiNotes } from '../recoil/atoms/keyboardMidi';
import useListenForMidiIn from '../hooks/audio/useListenForMidiIn';

interface Props {
  min: number;
  max: number;
  onPlay: (msg: number, note: number, velocity: number) => void;
  onStop: (msg: number, note: number, velocity: number) => void;
}

const PianoContainer = styled('div')({
  width: '100%',
  position: 'relative',
  overflowX: 'hidden',
  display: 'flex',
  justifyContent: 'center',
});

interface KeyStyleProps {
  isActive: boolean;
}

const NaturalKey = styled('div')({
  zIndex: 0,
  borderWidth: '1px',
  borderColor: '#4a5568',
  borderTopWidth: 0,
  borderBottomRightRadius: '0.125rem',
  borderBottomLeftRadius: '0.125rem',
  borderStyle: 'solid',
  backgroundColor: '#fff',
  display: 'flex',
  flex: '1 1 0%',
  cursor: 'pointer',
  userSelect: 'none',
  transition: 'all 200ms',
  width: 'auto !important',
  height: ({isActive}: KeyStyleProps) => isActive ? '205px' : '210px',
  backgroundImage: ({isActive}: KeyStyleProps) => isActive ? 'linear-gradient(#42c9ff, #28e6ff)' : 'none',
  borderBottom: '4px solid #90caf9',
});

const KeyLabel = styled('div')({
  width: '100%',
  userSelect: 'none',
  textTransform: 'uppercase',
  fontSize: '0.875rem',
  color: '#4a5568',
  paddingBottom: '1rem',
  justifyContent: 'center',
  alignSelf: 'flex-end',
  display: 'flex',
});

const AccidentalKey = styled('div')({
  height: ({isActive}: KeyStyleProps) => isActive ? '5.8rem' : '6rem',
  zIndex: 10,
  borderWidth: '1px',
  borderColor: '#000',
  borderBottomRightRadius: '0.125rem',
  borderBottomLeftRadius: '0.125rem',
  backgroundColor: '#2d3748',
  position: 'absolute',
  top: 0,
  cursor: 'pointer',
  display: 'flex',
  userSelect: 'none',
  transition: 'all 200ms',
  backgroundImage: ({isActive}: KeyStyleProps) => isActive ? 'linear-gradient(#42c9ff, #28e6ff)' : 'none',
  boxShadow: '-1px -1px 2px rgba(255, 255, 255, 0.2) inset, 0 -5px 2px 3px rgba(0, 0, 0, 0.6) inset, 0 2px 4px rgba(0, 0, 0, 0.5)',
});

const Piano = (props: Props) => {
  const { min, max, onPlay, onStop } = props;

  const [activeMidis, setActiveMidis] = useRecoilState(activeKeyboardMidiNotes);
  const [isMousePressed, setMousePressed] = useState(false);

  // TODO: DUE TO OUR USE OF HOOKS WE CAN MASSIVELY SIMPLIFIY ALL OF THIS
  // TODO: WE ACTUALLY DON'T NEED ALL THIS STUFF BECAUSE WEB MIDI SENDS THE EXACT FORMAT WE NEED TO TRIGGER THE SOUL PATCH.
  const play = useCallback((midi: number, velocity: number = 120) => {
    if (activeMidis.includes(midi)) return;

    setActiveMidis(currVal => [...currVal, midi]);

    onPlay(144, midi, velocity);
  }, [activeMidis, setActiveMidis, onPlay]);

  const stop = useCallback((midi: number, velocity: number = 0) => {
    setActiveMidis(currVal => currVal.filter(val => val !== midi));

    onStop(128, midi, velocity);
  },[activeMidis, setActiveMidis, onStop]);

  useListenForMidiIn(play, stop);

  const onMouseDown = (midi: number) => {
    setMousePressed(true);
    play(midi);
  };

  const onMouseUp = (midi: number) => {
    setMousePressed(false);
    stop(midi);
  };

  const range = { first: min, last: max };
  const midis = getAllMidiNumbersInRange(range);

  return (
    <PianoContainer>
      {midis.map(midi => {
        const { isAccidental } = MidiNumbers.getAttributes(midi);
        const naturalKeyWidth = getNaturalKeyWidthRatio(range) * 100;
        const left = getRelativeKeyPosition(midi, range) * naturalKeyWidth;

        const width = isAccidental ? 0.65 * naturalKeyWidth : naturalKeyWidth;
        const style = {
          left: `${left}%`,
          width: `${width}%`,
        };

        const KeyComponent = isAccidental ? AccidentalKey : NaturalKey

        return (
          <KeyComponent
            isActive={activeMidis.includes(midi)}
            onMouseDown={() => onMouseDown(midi)}
            onMouseUp={() => onMouseUp(midi)}
            onMouseEnter={isMousePressed ? () => play(midi) : undefined}
            onMouseLeave={() => stop(midi)}
            key={midi}
            style={style}
          >
            {!isAccidental && <KeyLabel>{Tone.Frequency(midi, 'midi').toNote()}</KeyLabel>}
          </KeyComponent>
        );
      })}
    </PianoContainer>
  );
};

export default React.memo(Piano);
