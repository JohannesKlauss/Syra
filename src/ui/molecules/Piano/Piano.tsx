/* Inspiration is taken from ritz078's piano implementation. https://github.com/ritz078/raaga/blob/master/components/Piano/Piano.tsx */

import React, { useState } from 'react';
import * as Tone from 'tone';
import { MidiNumbers } from 'piano-utils';
import { getAllMidiNumbersInRange, getNaturalKeyWidthRatio, getRelativeKeyPosition } from '../../../utils/keyboardMidiHelper';
import usePiano, { MidiCallable } from '../../../hooks/ui/usePiano';
import { AccidentalKey, KeyLabel, NaturalKey, PianoContainer } from './styled';

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