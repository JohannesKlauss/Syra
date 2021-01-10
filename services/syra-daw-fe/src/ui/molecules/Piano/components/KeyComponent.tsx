import React, {useCallback} from 'react';
import {MidiNumbers} from "piano-utils";
import * as Tone from "tone";
import AccidentalKey from "./AccidentalKey";
import NaturalKey from "./NaturalKey";
import KeyLabel from "./KeyLabel";
import {getRelativeKeyPosition, Range} from "../../../../utils/keyboardMidiHelper";
import usePianoRoll from "../../../../hooks/ui/usePianoRoll";
import {OnMidiEvent} from "../../../../types/Midi";

interface Props {
  note: number;
  isActive: boolean;
  renderVertical?: boolean;
  naturalKeyWidth: number;
  baseHeight: number;
  i: number;
  range: Range;
  onNote: OnMidiEvent;
  updateStore: OnMidiEvent;
}

const KeyComponent: React.FC<Props> = ({isActive, note, renderVertical, onNote, updateStore, naturalKeyWidth, baseHeight, i, range}) => {
  const { isAccidental } = MidiNumbers.getAttributes(note);
  const noteAsString = Tone.Frequency(note, 'midi').toNote();
  const Component = isAccidental ? AccidentalKey : NaturalKey;

  const onEvent = useCallback<OnMidiEvent>(
    (msg, note, velocity) => {
      updateStore(msg, note, velocity);
      onNote(msg, note, velocity);
    },
    [onNote, updateStore],
  );

  const { isMousePressed, onMouseUp, onMouseDown } = usePianoRoll(onEvent);

  return (
    <Component
      isActive={isActive}
      onMouseDown={() => onMouseDown(note)}
      onMouseUp={() => onMouseUp(note)}
      onMouseEnter={isMousePressed ? () => onEvent(144, note, 120) : undefined}
      onMouseLeave={isMousePressed ? () => onEvent(128, note, 0) : undefined}
      key={note}
      maxH={i === 0 ? '17px' : 'initial'}
      title={noteAsString}
      baseHeight={isAccidental ? baseHeight / 1.8 : baseHeight}
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
