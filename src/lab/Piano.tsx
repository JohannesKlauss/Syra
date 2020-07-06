/* Inspiration is taken from ritz078's piano implementation. https://github.com/ritz078/raaga/blob/master/components/Piano/Piano.tsx */

import React, { useState } from 'react';
import * as Tone from 'tone';
import { MidiNumbers } from 'piano-utils';
import { getAllMidiNumbersInRange, getNaturalKeyWidthRatio, getRelativeKeyPosition } from '../utils/keyboardMidiHelper';
import { styled } from '@material-ui/core';
import usePiano, { MidiCallable } from '../hooks/ui/usePiano';

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

interface Props {
  min: number;
  max: number;
  onNote: MidiCallable;
}

const Piano = (props: Props) => {
  const { min, max, onNote } = props;

  const [isMousePressed, setMousePressed] = useState(false);
  const [activeMidis, onEvent] = usePiano(onNote);

  const onMouseDown = (note: number) => {
    setMousePressed(true);
    onEvent(144, note, 120);
  };

  const onMouseUp = (note: number) => {
    setMousePressed(false);
    onEvent(128, note, 0);
  };

  const range = { first: min, last: max };
  const midis = getAllMidiNumbersInRange(range);

  return (
    <PianoContainer>
      {midis.map(note => {
        const { isAccidental } = MidiNumbers.getAttributes(note);
        const naturalKeyWidth = getNaturalKeyWidthRatio(range) * 100;

        const style = {
          left: `${getRelativeKeyPosition(note, range) * naturalKeyWidth}%`,
          width: `${isAccidental ? 0.65 * naturalKeyWidth : naturalKeyWidth}%`,
        };

        const KeyComponent = isAccidental ? AccidentalKey : NaturalKey

        return (
          <KeyComponent
            isActive={activeMidis.includes(note)}
            onMouseDown={() => onMouseDown(note)}
            onMouseUp={() => onMouseUp(note)}
            onMouseEnter={isMousePressed ? () => onEvent(144, note, 120) : undefined}
            onMouseLeave={() => onEvent(128, note, 0)}
            key={note}
            style={style}
          >
            {!isAccidental && <KeyLabel>{Tone.Frequency(note, 'midi').toNote()}</KeyLabel>}
          </KeyComponent>
        );
      })}
    </PianoContainer>
  );
};

export default React.memo(Piano);
