import React, { useMemo } from 'react';
import { MidiNumbers } from 'piano-utils';
import * as Tone from 'tone';
import AccidentalKey from './AccidentalKey';
import NaturalKey from './NaturalKey';
import KeyLabel from './KeyLabel';
import { getRelativeKeyPosition, Range } from '../../../../utils/keyboardMidiHelper';
import { MidiEventCallable } from '../../../../types/Midi';
import { useRecoilValue } from 'recoil';
import { keyboardMidiStore } from '../../../../recoil/keyboardMidiStore';

interface Props {
  note: number;
  renderVertical?: boolean;
  naturalKeyWidth: number;
  baseHeight: number;
  i: number;
  range: Range;
  triggerNoteEvent: MidiEventCallable;
  isMousePressed: boolean;
  onMouseDown: (note: number) => void;
  onMouseUp: (note: number) => void;
}

const KeyComponent: React.FC<Props> = ({
  note,
  renderVertical,
  triggerNoteEvent,
  naturalKeyWidth,
  baseHeight,
  i,
  range,
  onMouseDown,
  isMousePressed,
  onMouseUp,
}) => {
  const { isAccidental } = MidiNumbers.getAttributes(note);
  const noteAsString = Tone.Frequency(note, 'midi').toNote();
  const Component = isAccidental ? AccidentalKey : NaturalKey;
  const activeMidis = useRecoilValue(keyboardMidiStore.activeKeyboardMidiNotes);
  const isActive = useMemo(() => activeMidis.includes(note), [activeMidis, note]);

  return (
    <Component
      isActive={isActive}
      onMouseDown={() => onMouseDown(note)}
      onMouseUp={() => onMouseUp(note)}
      onMouseEnter={isMousePressed ? () => triggerNoteEvent(144, note, 120) : undefined}
      onMouseLeave={isMousePressed ? () => triggerNoteEvent(128, note, 0) : undefined}
      key={note}
      maxH={i === 0 ? '17px' : 'initial'}
      title={noteAsString}
      height={isAccidental ? baseHeight / 1.8 : baseHeight}
      left={`${98.5491803278688 - getRelativeKeyPosition(note, range) * naturalKeyWidth}%`}
      width={`${isAccidental ? 0.65 * naturalKeyWidth : naturalKeyWidth}%`}
      renderVertical={renderVertical}
    >
      {!isAccidental && noteAsString.startsWith('C') && (
        <KeyLabel renderVertical={renderVertical}>{noteAsString}</KeyLabel>
      )}
    </Component>
  );
};

// @ts-ignore
KeyComponent.whyDidYouRender = true;

export default KeyComponent;
