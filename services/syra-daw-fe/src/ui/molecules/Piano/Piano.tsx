/* Inspiration is taken from ritz078's piano implementation. https://github.com/ritz078/raaga/blob/master/components/Piano/Piano.tsx */

import React, { useCallback } from 'react';
import * as Tone from 'tone';
import { MidiNumbers } from 'piano-utils';
import { getAllMidiNumbersInRange, getNaturalKeyWidthRatio, getRelativeKeyPosition } from '../../../utils/keyboardMidiHelper';
import useUpdateMidiStore from '../../../hooks/midi/useUpdateMidiStore';
import { useRecoilValue } from 'recoil';
import { keyboardMidiStore } from '../../../recoil/keyboardMidiStore';
import usePianoRoll from '../../../hooks/ui/usePianoRoll';
import { OnMidiEvent } from '../../../types/Midi';
import useConnectPianoRollToSelectedChannel from '../../../hooks/midi/useConnectPianoRollToSelectedChannel';
import PianoContainer from './components/PianoContainer';
import AccidentalKey from "./components/AccidentalKey";
import NaturalKey from "./components/NaturalKey";
import KeyLabel from "./components/KeyLabel";

interface Props {
  min: number;
  max: number;
}

const Piano = (props: Props) => {
  const { min, max } = props;

  const activeMidis = useRecoilValue(keyboardMidiStore.activeKeyboardMidiNotes);
  const updateStore = useUpdateMidiStore();
  const onNote = useConnectPianoRollToSelectedChannel();

  const onEvent = useCallback<OnMidiEvent>((msg, note, velocity) => {
    updateStore(msg, note, velocity);
    onNote(msg, note, velocity);
  }, [onNote, updateStore]);

  const {isMousePressed, onMouseUp, onMouseDown} = usePianoRoll(onEvent);

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

        const KeyComponent = isAccidental ? AccidentalKey : NaturalKey;

        return (
          <KeyComponent
            isActive={activeMidis.includes(note)}
            onMouseDown={() => onMouseDown(note)}
            onMouseUp={() => onMouseUp(note)}
            onMouseEnter={isMousePressed ? () => onEvent(144, note, 120) : undefined}
            onMouseLeave={isMousePressed ? () => onEvent(128, note, 0) : undefined}
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